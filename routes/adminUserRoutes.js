// adminUserRoutes.js
import express from 'express';
const router = express.Router();
import {
  getAllAdminUsers,
  getAdminUserById,
  createAdminUser,
  updateAdminUser,
  deleteAdminUser,
} from "../controllers/adminUserController.js";

// GET All Admin Users
router.get('/', getAllAdminUsers);

// GET Admin User by ID
router.get('/:id', getAdminUserById);

// POST Create Admin User
router.post('/', createAdminUser);

// PUT Update Admin User by ID
router.put('/:id', updateAdminUser);

// DELETE Admin User by ID
router.delete('/:id', deleteAdminUser);

export default router;
