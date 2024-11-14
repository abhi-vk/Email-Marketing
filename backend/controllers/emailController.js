const agenda = require('../config/agenda');
const Joi = require('joi');

// Validation schema for email scheduling
const emailSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().min(3).max(255).required(),
  body: Joi.string().min(1).required(),
  delayInMinutes: Joi.number().min(1).required(),
});

// Schedule an email to be sent after a delay
exports.scheduleEmail = async (req, res) => {
  const { error } = emailSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Validation error', details: error.details });
  }

  const { to, subject, body, delayInMinutes } = req.body;

  try {
    await agenda.schedule(`in ${delayInMinutes} minutes`, 'send email', { to, subject, body });
    res.status(200).json({ message: `Email scheduled to be sent in ${delayInMinutes} minutes` });
  } catch (error) {
    console.error('Error scheduling email:', error);
    res.status(500).json({ message: 'Server error, unable to schedule email' });
  }
};
