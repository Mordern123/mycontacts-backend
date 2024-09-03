const express = require("express");
const router = express.Router();
const { 
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact 
} = require("../controllers/contactsController");

// Route for handling all contacts
router.route("/")
  .get(getContacts)
  .post(createContact);

// Route for handling individual contacts
router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;