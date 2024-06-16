import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRoutes);

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
} else {
    console.log("Connecting to MongoDB...");
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
