import express, { Request, Response } from "express";
import {
    create_new_product,
    get_filtered_products,
    get_product_by_id,
} from "../controllers/product_controller";
const product = express.Router();

product.use(express.json());

product.post("/", async (req: Request, res: Response) => {
    try {
        let product = req.body.product;
        let status,
            data = await create_new_product(product);
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

product.get("/id/:product_id", async (req: Request, res: Response) => {
    let product_id = parseInt(req.params.product_id);
    try {
        let status,
            data = await get_product_by_id(product_id);
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

product.get("/filter/products", async (req: Request, res: Response) => {
    var filter: any = {}
    for(const [key, value] of Object.entries(req.query)){
        filter[key] = value;
    }
    
    try {
        let status,
            data = await get_filtered_products(filter);
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
