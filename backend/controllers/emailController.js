const agenda = require('../config/agenda');

// Schedule an email to be sent after a delay
exports.scheduleEmail = async (req, res) => {
  const { to, subject, body, delayInMinutes } = req.body;

  try {
    // Schedule the email job
    await agenda.schedule(`in ${delayInMinutes} minutes`, 'send email', {
      to,
      subject,
      body,
    });

    res.status(200).json({ message: `Email scheduled to be sent in ${delayInMinutes} minutes` });
  } catch (error) {
    console.error('Error scheduling email:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
