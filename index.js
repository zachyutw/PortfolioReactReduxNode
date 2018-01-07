const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


const keys =require('./config/keys');

// some error would happen when the route require before models
require('./models/User');
require('./models/test');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
//put push requires would parse to json
app.use(bodyParser.json());

app.use(
    cookieSession({
       //       d    hh    mm  ss
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());
// some error would happen when the route require before models
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
/*
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);
*/

if (process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like main.js
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route 

    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

