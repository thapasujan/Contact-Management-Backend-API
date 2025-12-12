import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';
import connectDB from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes); 

app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})