const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String},
    phoneNumber:{type: Number},
    email: {type: String, required: true,unique:true}
});


module.exports = mongoose.model('Contact', ContactSchema);
