import {Router} from "express";

import {getCustomers, getCustomer, sendCustomer} from "../Controllers/customersController.js";
import {validateSchema} from "../middlewares/validateSchemaMiddleware.js";
import { customerSchema } from "../schemas/customerSchema.js";


const customersRouter = Router();

customersRouter.get('/customers', getCustomers);

customersRouter.get('/customers/:id', getCustomer);

customersRouter.post('/customers', (req, res, next) => {
    validateSchema(req, res, next, customerSchema);
}, sendCustomer);

export default customersRouter;