const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactsSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    address: {
        type: String,
        addressLocality:String,
        addressRegion: String,
        postalCode: String,
        streetAddress: String
      }
});
const userSchema = new Schema({
    googleId: String,
    credits:{
        type:Number,
        default:0
    },   
    name:{
        type:String,
    },
    photo: {
        type:String,
        default: 'http://thehumorous.com/wp-content/uploads/2013/11/Did-you-eat-the-kitty-cats-treats-Denver-50x50.gif'
     },
    contact_info: ContactsSchema,
    admin: {
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        default:'Please talk more about yourself'
    },
    jobtitle:{
        tpye:String,
        default:''
    },


});



mongoose.model('users', userSchema);
