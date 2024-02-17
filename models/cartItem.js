// models/cartItem.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
  courtId: {
    type: Schema.Types.ObjectId,
    ref: 'Court', // Assuming you have a Court model
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1 // Default quantity is 1
  }
});

const CartItem = model('CartItem', cartItemSchema);

export default CartItem;
