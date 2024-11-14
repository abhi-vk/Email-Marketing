const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const flowchartRoutes = require('./routes/flowchartRoutes');
const emailRoutes = require('./routes/emailRoutes');
const agenda = require('./config/agenda');

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// API Routes
app.use('/api', flowchartRoutes);
app.use('/api', emailRoutes);

// Start Agenda job processing
agenda.start();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
