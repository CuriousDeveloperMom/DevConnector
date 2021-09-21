import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application  = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('TEST!');
    res.send('Hello from HomePage!');
})

app.listen(PORT, () => console.log(`Server Running on Port : http://localhost:${PORT}`));


// const greeting: string ='Hello';
// const numbers: number[] = [1,2,3];
