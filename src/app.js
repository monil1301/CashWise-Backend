import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.get('/ping', (req, res) => {
    console.log("ping received");
    res.send('pong');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running 0.0.0.0 on port ${PORT}`));
