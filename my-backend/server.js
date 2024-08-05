// server.js
const express = require('express');
const stripe = require('stripe')('sk_test_51PjeB7P92KzHwMGNfWhUT29ydnJze8hxZtjfbQfZ6hdsmULDMDXQzBrmRxxpO2y81Crv2KtHKPFVqqpwuuJPvz8Z00oaPk9AnX');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
}));

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).send('No items provided');
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/success', // Replace with your success URL
      cancel_url: 'http://localhost:5173/cancel', // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(4242, () => {
  console.log('Server listening on port 4242');
});
