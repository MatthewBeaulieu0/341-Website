import { query } from "../helpers/query_helper";

// let user_db: any = {
//     jim_1: {
//         name: "jim",
//         password: "1abcdefghikdwsa",
//         seller: false,
//         age: 69,
//         email: "jim_dn@gmail.com",
//         address: "Homeless",
//     },
//     alex_1: {
//         name: "alex",
//         password: "1qwertyuiop",
//         seller: true,
//         age: 96,
//         email: "alex_dn@gmail.com",
//         address: "Homemore",
//     },
// };

export async function find_user_by_id(user_id: number) {
    var sql = "SELECT * FROM fake_amazon.user WHERE user_id=?;";
    try {
        var user: any = await query(sql, [user_id]);
        console.log(user);
    } catch (error) {
        console.log(error);
        throw error;
    }
    return user;
}

export async function create_user(user: any) {
    var sql =
        "INSER INTO fake_amazon.user (name,password,seller,age,email,address) VALUES (?,?,?,?,?,?);";
    try {
        var result: any = await query(sql, [
            user.name,
            user.password,
            user.seller,
            user.age,
            user.email,
            user.address,
        ]);
    } catch (err: any) {
        console.log(console.error);
        return null;
    }
    return result;
}

export async function add_to_user_cart(user_id: number, product_id: number) {
    var sql = `
                    UPDATE user
                    SET shopping_cart=JSON_ARRAY_APPEND(shopping_cart, '$', ?)
                    WHERE user_id = ?;
                `;
    try {
        var result: any = await query(sql, [product_id, user_id]);
        console.log(result);
    } catch (error) {
        console.log(error);
        throw error;
    }

    if (result.affectedRows == 0) {
        return false;
    }

    return true;
}

export async function remove_from_user_cart(
    product_ids: number,
    user_id: number
) {
    var sql = `UPDATE user SET shopping_cart=JSON_ARRAY(?) WHERE user_id = ?`;
    try {
        var result = await query(sql, [product_ids, user_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return result;
}
