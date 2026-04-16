const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(cors());                        // Allow frontend to connect
app.use(express.json());               // Parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// Global Error Handler (catches any unhandled errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Sync database then start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Database connected and synced');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ DB connection failed:', err));