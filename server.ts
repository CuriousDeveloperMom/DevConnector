import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  console.log('TEST!!');
  res.send('Hello from Express Server!!');
});

app.listen(PORT, () =>
  console.log(`Server Running on Port : http://localhost:${PORT}`)
);
