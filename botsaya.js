const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

const sendMessage = async (to, message) => {
  try {
    const result = await client.messages.create({
      from: 'whatsapp:+6281535298570', // Twilio sandbox number
      body: message,
      to: `whatsapp:${to}`
    });
    console.log(`Message sent: ${result.sid}`);
  } catch (error) {
    console.error(`Error sending message: ${error.message}`);
  }
};

// Example usage
sendMessage('RECIPIENT_PHONE_NUMBER', 'Hello, selamat datang diwa bot');
