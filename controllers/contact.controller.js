const Contact = require('../model/contact.model')

exports.contact_create = function (req, res) {
    let contact = new Contact(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }
    );

    contact.save(function (err) {
      if(err)
        res.send("error"+err);
      else
       res.send('Contact Created successfully');
    })
};

exports.contact_details = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        res.send(contact);
    })
};

exports.all_contact_details = function (req, res) {
    Contact.find({}, function (err, contacts) {
        res.send(contacts);
    })
};

exports.search_by_fname = function (req, res) {
    Contact.where('firstName',req.params.firstName).findOne(function (err, contacts) {
        if(err)
          console.log(err);
        res.send(contacts);
    })
};

exports.search_by_email = function (req, res) {
    Contact.where('email',req.params.email).findOne(function (err, contacts) {
        if(err)
          console.log(err);
        res.send(contacts);
    })
};

exports.contact_update = function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contact) {
        res.send('Contact updated');
    });
};

exports.contact_delete = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
        res.send('Deleted successfully');
    })
};
