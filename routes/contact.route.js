const express = require('express');
const router = express.Router();
const contact_controller = require('../controllers/contact.controller');

router.post('/create',contact_controller.contact_create);
router.get('/:id',contact_controller.contact_details);
router.get('/',contact_controller.all_contact_details);
router.get('/first-name/:firstName',contact_controller.search_by_fname);
router.get('/email/:email',contact_controller.search_by_email);
router.put('/:id/update',contact_controller.contact_update);
router.delete('/:id/delete',contact_controller.contact_delete);
module.exports = router;
