const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    app.post('/api/stripe',requireLogin, async (req, res) =>{
        //console.log(req.body);
        

        const charge = await stripe.charges.create({
            amount: 500,
            currency:'usd',
            description:"$5 for 5 credits",
            source:req.body.id
        });
        req.user.credit += 5;
        const user = await req.user.save();
        res.send(user);
    });
}
/** https://stripe.com/docs/api/node#create_charge
 * var stripe = require("stripe")(
 * "sk_test_2ggCsMO97ThgKNnP1j7IhUdo"
 * );
  stripe.charges.create({
  amount: 2000,
  currency: "cad",
  source: "tok_visa", // obtained with Stripe.js
  description: "Charge for liam.thompson@example.com"
}, function(err, charge) {
  // asynchronously called
});
 */
/**  The post need to be parsed to json
 *   https://www.npmjs.com/package/body-parser
 */