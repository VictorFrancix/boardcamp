import { Router} from "express";

import { getCategories } from "../Controllers/categoryController.js";

const categoryRouters = Router();

categoryRouters.get('/categories', getCategories);

export default categoryRouters; 