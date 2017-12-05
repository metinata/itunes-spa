import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import morgan from 'morgan'
import cors from 'cors'
import { cache } from './caching'

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('combined'));

app.use('/api', cache, routes);

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Express is running on ${process.env.EXPRESS_PORT}`);
});