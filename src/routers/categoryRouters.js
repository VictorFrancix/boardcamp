import { Router} from "express";

import { getCategories, sendCategory } from "../Controllers/categoryController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { categorySchema } from "../schemas/categorySchema.js";

const categoryRouters = Router();

categoryRouters.get('/categories', getCategories);

categoryRouters.post('/categories', (req,res,next) => {
    validateSchema(req,res,next,categorySchema);},
     sendCategory);

export default categoryRouters; 