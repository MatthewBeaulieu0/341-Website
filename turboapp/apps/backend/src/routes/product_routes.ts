import express, { Request, Response } from "express";
const product = express.Router();

product.use(express.json());

product.get("/:product_id", (req: Request, res: Response) => {
    let product_id = req.params.product_id
    res.json({"product_id":product_id})
    res.status(200);
});


module.exports = product;
