const Agenda = require('agenda');

// Set up Agenda with MongoDB as the storage
const agenda = new Agenda({
  db: { address: process.env.MONGO_URI || 'mongodb://localhost:27017/emailMarketing', collection: 'agendaJobs' },
  processEvery: '30 seconds',
  maxConcurrency: 20,
});

// Define a job to send emails with retry logic
agenda.define('send email', { priority: 'high', concurrency: 5 }, async (job) => {
  const { to, subject, body } = job.attrs.data;

  const nodemailer = require('nodemailer');
  require('dotenv').config(); // Load environment variables

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, // Use the sender email from env
    to,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
    throw new Error('Failed to send email');
  }
});

module.exports = agenda;
