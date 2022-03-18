import { Request } from "express";
import { FrontendUser } from "./user";

export interface NewRequest extends Request {
    user: FrontendUser;
}
