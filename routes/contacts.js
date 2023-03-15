const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../model/User');
const Contact = require('../model/Contact');

/**
 * @route     GET api/contacts
 * @desc      Get all users contacts
 * @access    Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    return res.json(contacts);
  } catch (err) {
    console.error(err.message);
  }
});

/**
 * @route     POST api/contacts
 * @desc      Add new contacts
 * @access    Private
 */
router.post('/', (req, res) => {
  res.send('Add contact');
});

/**
 * @route     PUT api/contacts/:id
 * @desc      Update contact
 * @access    Private
 */
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

/**
 * @route     DELETE api/contacts/:id
 * @desc      Delete contact
 * @access    Private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
