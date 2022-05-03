import express from 'express';

const app = express();

// Middlewares
app.use(express.json());

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server listening on ${port}`));
