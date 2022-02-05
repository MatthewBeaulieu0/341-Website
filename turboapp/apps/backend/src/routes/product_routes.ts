import express, { Request, Response } from "express";
const product = express.Router(***REMOVED***

product.use(express.json()***REMOVED***

product.get("/:product_id", (req: Request, res: Response) => {
    let product_id = req.params.product_id
    res.json({"product_id":product_id})
    res.status(200***REMOVED***
}***REMOVED***


module.exports = product;