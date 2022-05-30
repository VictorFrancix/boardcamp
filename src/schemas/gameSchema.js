import joi from "joi";

export const gameSchema =
     joi.object({
        name: joi.string().required(),
        image: joi.string().required(),
        pricePerDay: joi.number().required(),
        categoryId: joi.number().required(),
        stockTotal: joi.number().required(),
    });