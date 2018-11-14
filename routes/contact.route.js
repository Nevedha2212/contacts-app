const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact.controller');
const contact_policy = require('../policies/contact.policy');

const contactController = new ContactController();

router.get('/test', contact_policy.basicAuth, (req, res) => {
    contactController.test(req, res);
});

router.post('/create', contact_policy.basicAuth, (req, res) => {
    contactController.contact_create(req, res);
});

router.get('/:email', contact_policy.basicAuth, (req, res) => {
    contactController.contact_details(req, res);
});

router.get('/', contact_policy.basicAuth, (req, res) => {
    contactController.all_contact_details(req, res);
});

router.get('/first-name/:firstName', contact_policy.basicAuth, (req, res) => {
    contactController.search_by_fname(req, res);
});

router.get('/email/:email', contact_policy.basicAuth, (req, res) => {
    contactController.search_by_email(req, res);
});

router.put('/update/:email', contact_policy.basicAuth, (req, res) => {
    contactController.contact_update(req, res);
});

router.delete('/delete/:email', contact_policy.basicAuth, (req, res) => {
    contactController.contact_delete(req, res);
});

router.get('/pagination/:start', contact_policy.basicAuth, (req, res) => {
    contactController.pagination(req, res);
});

module.exports = router;
