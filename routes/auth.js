const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

/**
 * @route     GET api/auth
 * @desc      Get logged in user
 * @access    Private
 */
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

/**
 * @route     POST api/auth
 * @desc      Auth user & get token
 * @access    Public
 */
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors) {
      return res.status(500).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          return res.send({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
