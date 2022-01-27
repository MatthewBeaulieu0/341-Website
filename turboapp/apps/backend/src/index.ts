import express, { Application, Request, Response } from "express";
//import jsonwebtoken from "jsonwebtoken";
//import { hash, compare } from "bcrypt";
import cors from "cors";
const app: Application = express();

const port: number = 3001; // Backend port
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4200"], // Origin frontend to change later when deployed
  })
);
//For post please just add encryption
app.get("/api/hi", (_: Request, res: Response) => {
  res.send("Hello WORLD!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`);
});

//part of the web
