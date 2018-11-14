const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String},
    phoneNumber:{type: Number},
    email: {type: String, required: true, unique:true}
});

ContactSchema.index({ email: 1 });

module.exports = mongoose.model('Contact', ContactSchema);
