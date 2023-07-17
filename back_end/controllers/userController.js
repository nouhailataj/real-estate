const User = require('../models/user');

const UserController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ success: false, message: 'Email address is already registered' });
      }

      const newUser = new User({ name, email, password });
      await newUser.save();

      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
    }
  },
};

module.exports = UserController;
