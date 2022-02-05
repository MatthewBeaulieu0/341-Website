import express, { Request, Response } from "express";
import { get_user_by_id } from "../controllers/user_controllers";
const user = express.Router();

user.use(express.json());

user.get("/:user_id", (req: Request, res: Response) => {
    let user_id = req.params.user_id
    try{
        let status, user = get_user_by_id(user_id)
        res.json({user})
        if (status == 200) {res.sendStatus(200);}
        if (status == 404) {res.sendStatus(404);}
    }
    catch (err: any) {
        res.status(400);
        res.json({"errType": err.name, "errMsg": err.message});
    }
});


module.exports = user;