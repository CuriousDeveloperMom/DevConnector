import express, { Application, Request, Response } from 'express';
//import connectDB from './config/db';
const connectDB = require('./config/db');

const app: Application = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json()); //{extended: false}

app.get('/', (req: any, res: any) => {
  console.log('TEST!!!');
  res.send('Hello from Express Server (DevConnector)!!');
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running on Port : http://localhost:${PORT}`)
);
