const express = require('express');
const walletRoutes = require('./routes/walletRoutes');
const db = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/wallet', walletRoutes);

app.use(errorHandler);

app.listen(port, async () => {
  try {
    await db.authenticate();
    console.log('Database connected!');
    console.log(`Server running on http://localhost:${port}`);
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
});
