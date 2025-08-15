const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error(err));

// Routes
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: 'Message stored successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
app.get('/resume', (req, res) => {
  res.download(__dirname + '/files/resume.pdf');
});



// require("dotenv").config();
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
// });

// app.post("/send", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // Send to yourself for testing
//       subject: `New message from ${name}`,
//       text: `Email: ${email}\nMessage: ${message}`,
//     };

//     let info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent:", info.response);

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Error sending email:", error);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// app.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });
