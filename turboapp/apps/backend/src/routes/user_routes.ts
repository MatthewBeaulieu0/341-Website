import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
import {
    get_user_by_id,
    create_new_user,
    get_user_cart,
    add_product_to_cart,
    get_user_by_email,
    delete_product_from_cart,
    checkout_order,
    view_orders,
    bulk_update_cart,
} from "../controllers/user_controllers";
import { User } from "../models/users";
//import { sign, verify } from "jsonwebtoken";
const user = express.Router();
user.use(express.json());
//Bcrypt variables for encryption
import { compare } from "bcrypt";
//const saltRounds = 4;
import { randomBytes } from "crypto";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const { sign } = jwt;

user.post("/api/signup", async (req: Request, res: Response) => {
    try {
        let user = req.body.user;
        //console.log(user);
        let status,
            data = await create_new_user(user);
        res.json({ data });
        if (status == 200) {
            res.sendStatus(200);
        }
        if (status == 400) {
            res.sendStatus(400);
        }
        if (status == 401) {
            res.sendStatus(401).json("Email already exists");
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

user.post("/api/login", async (req: Request, res: Response) => {
    let user;
    try {
        let email = req.body.email;
        let pwd = req.body.password;
        const userArr: User = await get_user_by_email(email);
        const status = userArr[0];
        const { password, ...user } = await userArr[1]; // Remove the status from the user
        if (status == 404) {
            throw error;
        } else {
            let match = await compare(pwd, password);
            if (match) {
                //console.log("MATCH");
                console.log("TOKEN_SECRET=" + randomBytes(64).toString("hex"));
                const token = generateAccessToken(user);
                res.cookie("FrontendUser", token, {
                    maxAge: 28800000,
                    path: "/",
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                });
                res.status(200).json(user);
            } else {
                res.status(401).json(
                    "A user with such password email config does not exist"
                );
            }
        }
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
    return user;
});

user.post("/api/session", [verifyJWT], async (req: Request, res: Response) => {
    try {
        console.log(req.user);
        return res.status(200).json(req.user);
    } catch (err: any) {
        return res.status(400).json({ errType: err.name, errMsg: err.message });
    }
});

user.post("api/logout", async (_req: Request, res: Response) => {
    res.cookie("FrontendUser", "", {
        expires: new Date(Date.now()),
        path: "/",
        httpOnly: true,
    });
    return res.status(200).json(true);
});

user.get("/id/:user_id", async (req: Request, res: Response) => {
    let user_id = parseInt(req.params.user_id);
    console.log(user_id);
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

user.put("/id/:user_id/bulk_update_cart", async (req: Request, res: Response) => {
    let user_id = parseInt(req.params.user_id);
    console.log(user_id);
    let items = req.body.items;
    console.log("ID" + user_id + "Items" + items);
    try {
        let status,
            data = await bulk_update_cart(user_id, items);
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
            //console.log(req.body);
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

user.put("/id/:user_id/checkout/", async (req: Request, res: Response) => {
    console.log("checkout m8");
    try {
        let user_id = parseInt(req.params.user_id);
        let data = await checkout_order(user_id);
        let status: any = data[0];
        res.json({ data }).status(status);
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

user.get("/id/:user_id/orders/", async (req: Request, res: Response) => {
    console.log("order m8");
    try {
        let user_id = parseInt(req.params.user_id);
        let data = await view_orders(user_id);
        console.log(data);
        let status: any = data[0];
        res.json({ data }).status(status);
    } catch (err: any) {
        res.status(400);
        res.json({ errType: err.name, errMsg: err.message });
    }
});

// Function to sign the jwts
export function generateAccessToken(username: any) {
    //console.log(process.env.TOKEN_SECRET!);
    return sign(username, process.env.TOKEN_SECRET!, { expiresIn: "28800000" });
}
export function verifyJWT(req: Request, res: Response, next: NextFunction) {
    console.log(req.cookies);
    const { FrontendUser } = req.cookies;
    try {
        const { iat, exp, ...payload } = jwt.verify(
            FrontendUser,
            process.env.TOKEN_SECRET!
        ) as User;
        req.user = payload;
        next();
    } catch (err: any) {
        res.status(401).json("Invalid Session");
    }
}
module.exports = user;
