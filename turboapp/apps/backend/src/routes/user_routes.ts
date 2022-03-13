import express, { Request, Response } from "express";
import {
    get_user_by_id,
    create_new_user,
    get_user_cart,
    add_product_to_cart,
    get_user_by_email,
    delete_product_from_cart,
} from "../controllers/user_controllers";
import { User } from "../models/users";
const user = express.Router();
user.use(express.json());
//Bcrypt variables for encryption
const bcrypt = require("bcrypt");
const saltRounds = 4;
user.post("/api/signup", (req: Request, res: Response) => {
    try {
        let user = req.body.body.user;
        console.log(user);
        let status,
            data = create_new_user(user);
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
user.post("/api/login", async (req: Request, res: Response) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        console.log(email, password);
        let status,
            user: User = await get_user_by_email(email);
        if (!user || status == 400) {
            res.sendStatus(401).json("Email not found");
        } else {
            const match = await bcrypt.compare(
                password,
                saltRounds,
                user.password
            );
            if (match) {
                console.log("ITS A MATCH");
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

user.get("/id/:user_id", async (req: Request, res: Response) => {
    let user_id = parseInt(req.params.user_id);
    try {
        let status,
            data = await get_user_by_id(user_id);
        res.json({ data });
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

user.put("/id/:user_id/shopping_cart/", async (req: Request, res: Response) => {
    try {
        let product_id = parseInt(req.body.product_id);
        let user_id = parseInt(req.params.user_id);
        let quantity = parseInt(req.body.quantity);
        let status,
            data = await add_product_to_cart(user_id, product_id, quantity);
        res.json({ data });
        if (status == 200) {
            res.sendStatus(200);
        }
        if (status == 404) {
            res.sendStatus(404);
        }
        if (status == 400) {
            res.sendStatus(400);
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

user.delete(
    "/id/:user_id/shopping_cart/",
    async (req: Request, res: Response) => {
        try {
            console.log(req.body);
            let product_id = parseInt(req.body.product_id);
            let user_id = parseInt(req.params.user_id);
            let status,
                data = await delete_product_from_cart(user_id, product_id);
            res.json({ data });
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
    }
);

user.get("/id/:user_id/shopping_cart/", async (req: Request, res: Response) => {
    try {
        let user_id = parseInt(req.params.user_id);
        let status,
            data = await get_user_cart(user_id);
        res.json({ data });
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
module.exports = user;
