// adminUserController.js
import AdminUser from "../models/adminUser.js";

// GET All Admin Users
const getAllAdminUsers = async (req, res) => {
  try {
    const adminUsers = await AdminUser.find();
    res.json(adminUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Admin User by ID
const getAdminUserById = async (req, res) => {
  const adminUserId = req.params.id;

  try {
    const adminUser = await AdminUser.findById(adminUserId);
    if (!adminUser) {
      return res.status(404).json({ message: 'Admin User not found' });
    }
    res.json(adminUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST Create Admin User
const createAdminUser = async (req, res) => {
  const adminUser = new AdminUser(req.body);
  try {
    const newAdminUser = await adminUser.save();
    res.status(201).json(newAdminUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT Update Admin User by ID
const updateAdminUser = async (req, res) => {
  const adminUserId = req.params.id;

  try {
    const updatedAdminUser = await AdminUser.findByIdAndUpdate(
      adminUserId,
      req.body,
      { new: true }
    );
    if (!updatedAdminUser) {
      return res.status(404).json({ message: 'Admin User not found' });
    }
    res.json(updatedAdminUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Admin User by ID
const deleteAdminUser = async (req, res) => {
  const adminUserId = req.params.id;

  try {
    const deletedAdminUser = await AdminUser.findByIdAndDelete(adminUserId);
    if (!deletedAdminUser) {
      return res.status(404).json({ message: 'Admin User not found' });
    }
    res.json({ message: 'Admin User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllAdminUsers,
  getAdminUserById,
  createAdminUser,
  updateAdminUser,
  deleteAdminUser,
};
