import express from 'express';
import chalk from 'chalk';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(chalk.green("Server running at " + port))); 