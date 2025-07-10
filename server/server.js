const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const ProjectRoutes = require('./routes/project.routes');
const contactRoute = require('./routes/contact.routes');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://www.jaisal.blog',  
      "https://portfolio-sigma-nine-27.vercel.app",      
      'https://jaisal.blog'             
    ],
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/projects", ProjectRoutes);
app.use("/api/contact", contactRoute);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('[DB] ✅ Connected to MongoDB');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`[Server] 🚀 Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('[DB] ❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

startServer();
