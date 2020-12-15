import express, { json } from 'express';
import 'express-async-errors';
//import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);