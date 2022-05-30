import {Router} from "express";

import {getCustomers, getCustomer, sendCustomer, editCustomer} from "../Controllers/customersController.js";
import {validateSchema} from "../middlewares/validateSchemaMiddleware.js";
import { customerSchema } from "../schemas/customerSchema.js";


const customersRouter = Router();

customersRouter.get('/customers', getCustomers);

customersRouter.get('/customers/:id', getCustomer);

customersRouter.post('/customers', (req, res, next) => {
    validateSchema(req, res, next, customerSchema);
}, sendCustomer);

customersRouter.put('/customers/:id', (req, res, next) => {
    validateSchema(req, res, next, customerSchema);
}, editCustomer);

export default customersRouter;