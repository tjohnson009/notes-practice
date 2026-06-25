import express, { Request, Response } from 'express';
import { z } from "zod"; 

const app = express();
const port = 3000; 
const emailSchema = z.email();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' })
});

app.post('/users', (req: Request, res: Response) => {
    const result = emailSchema.safeParse(req.body.email)  

    if (!result.success) {
  res.status(400).json({ result: result.error.issues })
} else {
    const user = {
        email: result.data
    }
    return res.status(200).json(user)
}}
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
