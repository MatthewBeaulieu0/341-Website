import { user_schema } from "../models/users";
import { find_user_by_id } from "../services/user_services";

export function get_user_by_id(user_id: string){
    let user = find_user_by_id(user_id***REMOVED***
    if (user){
        let updated_user = user_schema.cast(user***REMOVED***
        return [200, updated_user];
    }
    else {
        return [404, {msg: "User not found"}];
    }
}