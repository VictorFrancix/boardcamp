import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

import categoryRouters from './routers/categoryRouters.js';
import gameRouter from './routers/gameRouter.js';
import customersRouter from './routers/customersRouter.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(categoryRouters);
app.use(gameRouter);
app.use(customersRouter);


const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(chalk.green("Server running at " + port))); 