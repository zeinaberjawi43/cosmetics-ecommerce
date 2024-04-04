const mongoose = require('mongoose');

// Define the schema
const UserInfoSchema = new mongoose.Schema({
  // Define your schema fields here
  firstname: {
    type: String,
    required: true, 
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the User model
const User = mongoose.model("User", UserInfoSchema);

// Export the User model
module.exports = User;
