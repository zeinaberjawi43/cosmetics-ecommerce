const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

// Controller to create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { role, firstname, lastname, password, email } = req.body;

    // Check if the email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const admin = new Admin({
      role,
      firstname,
      lastname,
      password: hashedPassword,
      email
    });

    // Save the admin to the database
    await admin.save();

    res.status(201).json({ message: 'Admin created successfully', admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get all admins
// exports getAllAdmins = async (req, res) => {
//   try {
//     // Retrieve all admins from the database
//     const admins = await Admins.find();

//     res.status(200).json(admins);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// Controller to get a single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;

    // Retrieve the admin by ID from the database
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to update a admin by ID
exports.updateAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { role, firstname, lastname, email } = req.body;

    // Check if the admin exists
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Update the admin
    admin.role = role;
    admin.firstname = firstname;
    admin.lastname = lastname;
    admin.email = email;

    // Save the updated admin to the database
    await admin.save();

    res.status(200).json({ message: 'Admin updated successfully', admin});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to delete a admin by ID
exports.deleteAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;

    // Delete the admin from the database
    await Admin.findByIdAndDelete(adminId);

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};