// netlify/functions/create-razorpay-order.js

const Razorpay = require('razorpay');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
  // Ensure the request is a POST request
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { amount, currency, projectId } = JSON.parse(event.body);

  // --- IMPORTANT: Replace with your Razorpay Key ID and Key Secret ---
  // It's highly recommended to use environment variables for these in Netlify
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'YOUR_KEY_ID', 
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET',
  });

  const options = {
    amount: amount, // Amount in the smallest currency unit (e.g., paise for INR)
    currency: currency,
    receipt: `receipt_order_${uuidv4()}`,
    notes: {
      projectId: projectId // Pass the projectId to track the order
    }
  };

  try {
    const order = await razorpay.orders.create(options);
    return {
      statusCode: 200,
      body: JSON.stringify(order),
    };
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create Razorpay order.' }),
    };
  }
};