// controllers/cartController.js
import CartItem from '../models/cartItem.js';

// Function to add a court to the cart
const addToCart = async (req, res) => {
  try {
    const { courtId, quantity } = req.body;

    // Check if the courtId is valid, and if needed, perform any additional validation

    // Create a new cart item
    const cartItem = new CartItem({
      courtId,
      quantity
    });

    // Save the cart item to the database
    const newCartItem = await cartItem.save();

    //res.status(201).json(newCartItem);
    res.status(201).json({ message: 'Court added to cart successfully', cartItem: newCartItem });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to remove a court from the cart
const removeFromCart = async (req, res) => {
  try {
    const { courtId } = req.params;

    // Check if the courtId is valid, and if needed, perform any additional validation

    // Find and delete the cart item by courtId
    const deletedCartItem = await CartItem.findOneAndDelete({ courtId });

    if (!deletedCartItem) {
      return res.status(404).json({ message: 'Court not found in the cart' });
    }

    res.json({ message: 'Court removed from the cart successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { addToCart, removeFromCart };
