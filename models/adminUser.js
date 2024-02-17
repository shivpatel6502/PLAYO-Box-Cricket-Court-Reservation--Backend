// adminUser.js
import mongoose from 'mongoose'; // Assuming mongoose is installed as a dependency

const { Schema, model } = mongoose;

const adminUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  user_mail: {
    type: String,
    required: true,
  },
});

const AdminUser = model('AdminUser', adminUserSchema);

export default AdminUser;
