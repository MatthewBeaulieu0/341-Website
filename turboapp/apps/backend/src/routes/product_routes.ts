import express, { Request, Response } from "express";
import {
    create_new_product,
    get_product_by_id,
} from "../controllers/product_controller";
const product = express.Router(***REMOVED***

product.use(express.json()***REMOVED***

product.put("/", (req: Request, res: Response) => {
    try {
        let product = req.body;
        let status,
            data = create_new_product(product***REMOVED***
        res.json({ data }***REMOVED***
        if (status == 200) {
            res.sendStatus(200***REMOVED***
        }
        if (status == 400) {
            res.sendStatus(400***REMOVED***
        }
    } catch (err: any) {
        res.status(400***REMOVED***
        res.json({ errType: err.name, errMsg: err.message }***REMOVED***
    }
}***REMOVED***

product.get("/:product_id", async (req: Request, res: Response) => {
    let product_id = req.params.product_id;
    try {
        let status,
            data = await get_product_by_id(product_id***REMOVED***
        res.json(data***REMOVED***
        res.status(200***REMOVED***
        if (status == 200) {
            res.sendStatus(200***REMOVED***
        }
        if (status == 404) {
            res.sendStatus(404***REMOVED***
        }
    } catch (err: any) {
        res.status(400***REMOVED***
        res.json({ errType: err.name, errMsg: err.message }***REMOVED***
    }
}***REMOVED***

module.exports = product;
