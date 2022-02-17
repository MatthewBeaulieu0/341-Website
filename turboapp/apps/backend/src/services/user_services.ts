import { query } from "../helpers/query_helper";

let user_db: any = {
    "jim_1": {
        "name": "jim",
        "type": "buyer",
        "age": 69,
        "email": "jim_dn@gmail.com",
        "address": "Homeless"
    },
    "alex_1": {
        "name": "alex",
        "type": "buyer",
        "age": 96,
        "email": "alex_dn@gmail.com",
        "address": "Homemore"
    },
}

export function find_user_by_id(user_id: string){
    try {
        return user_db[user_id];
    } catch (err: any) {
        return null;
    }
}

export function create_user(user: any){
    try {
        user_db[user.name] = user
    } catch (err: any) {
        return null;
    }
    return user_db[user.name];
}

export async function add_to_user_cart(user_id: number, product_id: number){
    var sql =   `
                    UPDATE users
                    SET shopping_cart=JSON_ARRAY_APPEND(shopping_cart, '$', ?)
                    WHERE UserID = ?;
                `;
    try {
        var result: any = await query(sql, [product_id, user_id]);
        console.log(result)
    } catch (error) {
        console.log(error);
        throw error;
    }

    if (result.affectedRows == 0) {
        return false;
    }

    return true;
}

export async function remove_from_user_cart(user_id: number, product_id: number){
    var sql =`
                UPDATE users
                SET shopping_cart=JSON_ARRAY_APPEND(??)
                WHERE UserID = ?;
            `;
    try {
        let product_ids: any = await get_user_cart_service(user_id)
        const index = product_ids.indexOf(product_id);
        if (index == -1){
            return null;
        }
        else{
            product_ids.splice(index, 1)
            var result = await query(sql, [product_ids, user_id]) 
        }
    } catch (error) {
    console.log(error);
    throw error;
}

return result;
}

export async function get_user_cart_service(user_id: number){
    var sql = `SELECT (shopping_cart) FROM users WHERE UserID = ?;`;
    try {
        var product_ids: any = await query(sql, [user_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return product_ids;
}
