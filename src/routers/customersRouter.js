import {Router} from "express";

import {getCustomers, getCustomer} from "../Controllers/customersController.js";

const customersRouter = Router();

customersRouter.get('/customers', getCustomers);
customersRouter.get('/customers/:id', getCustomer);

export default customersRouter;