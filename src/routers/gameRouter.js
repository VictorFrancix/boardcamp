import { Router } from "express";

import { getGames, sendGame } from "./../Controllers/gamesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { checkGameExists } from "../middlewares/checkGameMiddleware.js";
import { gameSchema } from "../schemas/gameSchema.js";


const gameRouter = Router();

gameRouter.get('/games', getGames);

gameRouter.post('/games', (req, res, next) => {
    validateSchema(req, res, next, gameSchema);
}, checkGameExists, sendGame);

export default gameRouter; 