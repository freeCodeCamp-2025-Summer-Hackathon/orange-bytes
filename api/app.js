import 'dotenv/config';
import express from 'express';
import { dbConnect } from './models/db.js';

const app = express()
const port = 3000

await dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})

