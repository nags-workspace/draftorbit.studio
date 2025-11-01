const functions = require("firebase-functions");
const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

// Initialize Razorpay instance using environment configuration
const razorpay = new Razorpay({
  key_id: functions.config().razorpay.key_id,
  key_secret: functions.config().razorpay.key_secret,
});

exports.createRazorpayOrder = functions.https.onCall(async (data, context) => {
  // 1. Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You must be logged in to create an order."
    );
  }

  // 2. Get data passed from the client
  const { amount, currency, projectId } = data;

  // 3. Create Razorpay options
  const options = {
    amount: amount, // Amount in smallest currency unit (e.g., paise)
    currency: currency,
    receipt: `receipt_order_${uuidv4()}`,
    notes: {
      projectId: projectId,
      userId: context.auth.uid, // Add user ID for tracking
    },
  };

  // 4. Create the order and return it or throw an error
  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Failed to create Razorpay order. Please try again."
    );
  }
});