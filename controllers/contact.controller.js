const Contact = require('../model/contact.model')

class ContactController {
    constructor() {

    }

    contact_create(req, res) {
        let contact = new Contact(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
            }
        );
    
        contact.save(function (err) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                res.status(200);
                res.json({  message: 'Contacts Created'});
            }
          });
    
    }

    contact_details(req, res) {
        Contact.findOne({ email: req.params.email }, function (err, contact) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                if (contact) {
                    res.json(contact);
                } else {
                    res.status(404);
                    res.json({ error: true, message: 'unable to find contact with email' });
                }
            }
        });
    }

    all_contact_details(req, res) {
        Contact.find({}, function (err, contacts) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                if (contacts) {
                    res.json(contacts);
                } else {
                    res.status(404);
                    res.json({ error: true, message: 'unable to find contact with email' });
                }
            }
        });
    }

    search_by_fname(req, res) {
        Contact.where('firstName',req.params.firstName).findOne(function (err, contacts) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                if (contacts) {
                    res.json(contacts);
                } else {
                    res.status(404);
                    res.json({ error: true, message: 'unable to find contact with First Name' });
                }
            }
        })
    }

    search_by_email(req, res) {
        Contact.where('email', req.params.email).findOne(function (err, contacts) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                if (contacts) {
                    res.json(contacts);
                } else {
                    res.status(404);
                    res.json({ error: true, message: 'unable to find contact with email' });
                }
            }
            
        });
    
    }

    contact_update(req, res) {
        Contact.findOneAndUpdate({ email: req.params.email }, req.body, function (err, contact) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                res.status(200);
                res.json({  message: 'Contacts Updated'});
            }
          });
    }

    contact_delete(req, res) {
        Contact.findOneAndRemove({ email: req.params.email }, function (err) {
            if (err) {
                res.status(500);
                res.json({ error: true, message: 'Internal server error' });
            } else {
                res.status(200);
                res.json({  message: 'Deleted successfully'});
            }
        });
    }

    pagination(req, res) {
        let startItem = req.params.start;
        Contact.find({ }).limit(2).skip(parseInt(startItem)).exec(function (err, contacts) {
            res.send(contacts);
        })
    }

}


module.exports = ContactController