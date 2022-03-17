// import { ResultSetHeader } from "mysql2";
import { query } from "../helpers/query_helper";

export async function get_order(user_id: number) {
    var sql = `SELECT * FROM fake_amazon.order WHERE user_id = ?`;
    try {
        var order: any = await query(sql, [user_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }
    return order;
}

export async function create_order(user_id: number, order_status_id: number) {
    var sql =
        "INSERT INTO fake_amazon.order (user_id, total_amount, order_status_id) VALUES (?, 0, ?);";
    
    var sql_get = "SELECT * FROM fake_amazon.order ORDER BY order_id DESC LIMIT 1"
    try {
        var result: any = await query(sql, [user_id, order_status_id]);
        console.debug(result);

        var new_order: any = await query(sql_get, [])

    } catch (err: any) {
        console.log(err.message);

        return null;
    }
    return new_order;
}

