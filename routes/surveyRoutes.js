
const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
//url library is a default library in the nodejs

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });
        res.send(surveys);
    });
    app.post('/api/surveys/webhooks', (req, res) => {
        // we want to extract out surveyid and choice from path
        const p = new Path('/api/surveys/:surveyId/:choice');
        const events = _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ email, surveyId, choice }) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                }, {
                        $inc: { [choice]: 1 },
                        $set: { 'recipients.$.responded': true },
                        lastResponded: new Date()
                    }).exec();
            })
            .value();
        /** */
        console.log(events);
        res.send({})
        /** 
        const events = _.map(req.body,({email,url})=>{
            //this would extract the routes from url for us
           const pathname = new URL(url).pathname
           const match = p.test(pathname);
           if(match){
               return {email,surveyId:match.surveyId,choice:match.choice};
           }
           // console.log(p.test(pathname));
        });
        const compactEvents = _.compact(events);
        const uniqueEvents = _.uniqBy(compactEvents,'email','surveyId');
       // console.log(events);
       //console.log(compactEvents);
       */
        /** use chain lodash helper */
        //console.log(req.body);
    })
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting');
    });
    //check user is login then check enough credit
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            // split would return a string array, mapp would turn the string array to a object array with string, then trim the space in the stringh
            // recipients: recipients.split(',').map(email => {return {email:email}}) 
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            //point to current user
            _user: req.user.id,
            dateSent: Date.now()
        });

        //Send an mail
        const mailer = new Mailer(survey, surveyTemplate(survey));
        // after we send the survey to users we can save the survey to our database

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }

    });



};