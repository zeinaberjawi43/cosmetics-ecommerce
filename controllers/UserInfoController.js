const User = require('../models/UserInfo');

// Controller function to handle user information related operations
const userInfoController = {
  // Get user information by ID
  getUserInfoById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user information:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update user information
  updateUserInfo: async (req, res) => {
    try {
      const userId = req.params.id;
      const updates = req.body;
      const options = { new: true }; // To return the updated document
      const updatedUser = await User.findByIdAndUpdate(userId, updates, options);
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user information:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = userInfoController;
