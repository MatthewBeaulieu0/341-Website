import express, { Application, Request, Response } from "express";
//import jsonwebtoken from "jsonwebtoken";
//import { hash, compare } from "bcrypt";
import cors from "cors";
import mysql from "mysql2";

const app: Application = express();

const port: number = 3001; // Backend port
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:4200"], // Origin frontend to change later when deployed
    })
);

///////////// db /////////////
export const conn = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "soen341db",
    database: "fake_amazon",
});

///////////// requiring routers /////////////
const user = require("./routes/user_routes");
app.use("/user", user);

const product = require("./routes/product_routes");
app.use("/product", product);

///////////// Heartbeat Route /////////////
//For post please just add encryption
app.get("/api/hi", (_: Request, res: Response) => {
    res.send("Hello WORLD!");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`);
});

//part of the web
