import express, { Request, Response } from "express";
import {
    create_new_product,
    get_product_by_id,
} from "../controllers/product_controller";
const product = express.Router();

product.use(express.json());

product.put("/", (req: Request, res: Response) => {
    try {
        let product = req.body;
        let status,
            data = create_new_product(product);
        res.json({ data });
        if (status == 200) {
            res.sendStatus(200);
        }
        if (status == 400) {
            res.sendStatus(400);
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

product.get("/:product_id", (req: Request, res: Response) => {
    let product_id = req.params.product_id;
    try {
        let status,
            data = get_product_by_id(product_id);
        res.json(data);
        res.status(200);
        if (status == 200) {
            res.sendStatus(200);
        }
        if (status == 404) {
            res.sendStatus(404);
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

module.exports = product;
