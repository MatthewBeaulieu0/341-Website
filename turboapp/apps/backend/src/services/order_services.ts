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
