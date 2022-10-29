// import dotenv from 'dotenv';
// dotenv.config();
require('dotenv').config();
import express, { Router } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { sample_foods, sample_tags, sample_users } from './data';
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
dbConnect();



const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})