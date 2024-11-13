const Agenda = require('agenda');
const mongoose = require('mongoose');

// Set up Agenda with MongoDB as the storage
const agenda = new Agenda({
  db: { address: 'mongodb://localhost:27017/emailMarketing', collection: 'agendaJobs' },
});

// Define a job to send emails
agenda.define('send email', async (job) => {
  const { to, subject, body } = job.attrs.data;
  
  // Nodemailer setup (this will be defined in the emailController)
  const nodemailer = require('nodemailer');
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-email-password', // Replace with your email password
    },
  });
  
  let mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to: to,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
  }
});

module.exports = agenda;
