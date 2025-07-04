import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './models/db.js';

dotenv.config();

const app = express()
const port = 3000

dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})

