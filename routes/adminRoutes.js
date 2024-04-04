const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { validateAdmin } = require('../middlewares/adminMiddleware');

// Route to create a new admin
router.post('/addadmin', validateAdmin, adminController.createAdmin);

// Route to get all admins
// router.get('/getadmins', adminController.getAllAdmins);

// Route to get a single admin by ID
router.get('/getadmin/:id', adminController.getAdminById);

// Route to update a admin by ID
router.put('/updateadmin/:id', validateAdmin, adminController.updateAdminById);

// Route to delete a admin by ID
router.delete('/deleteadmin/:id', adminController.deleteAdminById);

module.exports = router;