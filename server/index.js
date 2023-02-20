import express  from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use('/', route);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;


Connection(username, password);
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
DefaultData();