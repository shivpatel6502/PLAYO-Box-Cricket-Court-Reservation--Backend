// routes/cartRoutes.js
import express from 'express';
const router = express.Router();
import { addToCart, removeFromCart } from '../controllers/cartController.js';


// POST route to add a court to the cart
router.post('/', addToCart);

// DELETE route to remove a court from the cart
router.delete('/:courtId', removeFromCart);

//PUT route to update the quantity of a court in the cart
// router.put('/:courtId', updateCartItemQuantity);

export default router;
