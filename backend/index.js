import express from 'express';
import dotenv from 'dotenv';
import VideoRouter from './routes/VideoRouter.js';
import CommentRouter from './routes/CommentRouter.js';
import ProductRouter from './routes/ProductRouter.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
   extended: true
}));

app.use('/api/gigihplay/video', VideoRouter);
app.use('/api/gigihplay/comment', CommentRouter);
app.use('/api/gigihplay/product', ProductRouter);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

// database connection
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
   console.log(error);
});

database.once('connected', () => {
   console.log('Database connected');
});