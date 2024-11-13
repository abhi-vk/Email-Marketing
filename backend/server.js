const express = require('express');
const connectDB = require('./config/db');
const flowchartRoutes = require('./routes/flowchartRoutes');
const emailRoutes = require('./routes/emailRoutes');
const agenda = require('./config/agenda');


const cors = require('cors');

const app = express();

// Allow requests from http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Other middleware and routes


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// API Routes
app.use('/api', flowchartRoutes);
app.use('/api', emailRoutes);

// Start Agenda job processing
agenda.start();

// Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
