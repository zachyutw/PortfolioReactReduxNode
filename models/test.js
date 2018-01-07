const mongoose = require('mongoose');
const { Schema} = mongoose;

const testSchema = new Schema({
    test:{type:String, default: '1234'},
    //responded:{type:Boolean, default:false}
});

mongoose.model('tests',testSchema);