import { FrontendUser } from "../../src/types/user";
declare global {
    namespace Express {
        interface Request {
            user: FrontendUser;
        }
    }
}
