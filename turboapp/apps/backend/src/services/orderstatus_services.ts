import { query } from "../helpers/query_helper";


export async function create_order_status() {
    var sql =
        "INSERT INTO fake_amazon.orderstatus (status) VALUES (\"NotDelivered\");";
    
    var sql_get = "SELECT * FROM fake_amazon.orderstatus ORDER BY order_status_id DESC LIMIT 1"
    try {
        var result: any = await query(sql, []);
        console.debug(result);

        var new_order_status: any = await query(sql_get, [])

    } catch (err: any) {
        console.log(err.message);

        return null;
    }
    return new_order_status;
}