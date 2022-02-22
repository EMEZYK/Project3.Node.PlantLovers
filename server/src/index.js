/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import * as students from "./concepts/student/routes/index.js";

config();

if(!process.env.MONGO_CONNECT_URI) throw new Error("You must provide uri for mongo connect in env.");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(`Server started at http://localhost:${process.env.SERVER_PORT}`);
});

mongoose.connect(process.env.MONGO_CONNECT_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log("Connected into MongoDB.."))
.catch (err => console.error(err));

app.use("/students", students);


