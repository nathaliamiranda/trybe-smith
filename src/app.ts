import 'dotenv/config';
import express from 'express';
import ProductRouter from './routes/product.routes';
import error from './middlewares/error';

const app = express();

app.use(express.json());

app.use(ProductRouter);

app.use(error);

export default app;
