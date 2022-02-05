import { user_schema } from "../models/users";
import { find_user_by_id, create_user } from "../services/user_services";

export function get_user_by_id(user_id: string){
    let user = find_user_by_id(user_id);
    if (user){
        let updated_user = user_schema.cast(user);
        return [200, updated_user];
    }
    else {
        return [404, {msg: "User not found"}];
    }
}

export function create_new_user(user: object){
    let [err, error_data] = validate_user_data(user);
    if(err){
        return [400, error_data];
    }

    let new_user = create_user(user);
    return [200, new_user];
    
}

function validate_user_data(user: object){
    let error_data: any = {};
    let error_status = false;
    user_schema.validate(user).catch(function (err: any){
        error_data.errType = err.name;
        error_data.errMsg = err.errors;
    });
    return [error_status, error_data]
}
