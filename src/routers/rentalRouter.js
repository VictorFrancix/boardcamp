import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { rentalSchema } from "./../schemas/rentalSchema.js";
import { deleteRental,getRentals,returnRental,sendRental } from "./../Controllers/rentalController.js";
import { checkRentalExists } from "../middlewares/checkRentalMiddleware.js";

const rentalRouter = Router();

rentalRouter.get("/rentals", getRentals);
rentalRouter.post(
    "/rentals",
    (req, res, next) => {
        validateSchema(req, res, next, rentalSchema);
    },
    sendRental
);
rentalRouter.post("/rentals/:id/return", checkRentalExists, returnRental);
rentalRouter.delete("/rentals/:id", checkRentalExists, deleteRental);

export default rentalRouter;