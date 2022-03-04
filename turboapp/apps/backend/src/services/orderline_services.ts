// import { ResultSetHeader } from "mysql2";
import { query } from "../helpers/query_helper";


export async function get_orderline_by_order_id(order_id: number){
    var sql = `SELECT * FROM fake_amazon.orderline WHERE order_id = ?;`;
    try {
        var orderlines: any = await query(sql, [order_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return orderlines;
}

export async function get_orderline_by_order_id_and_product_id(order_id: number, product_id: number){
    var sql = `SELECT * FROM fake_amazon.orderline WHERE order_id = ? AND product_id = ?;`;
    try {
        var orderlines: any = await query(sql, [order_id, product_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return orderlines;
}

export async function add_order_to_orderline(order_id: number, product_id: number, quantity: number){
    var sql = `INSERT INTO fake_amazon.orderline (order_id, product_id, quantity) VALUES (?, ?, ?);`;
    try {
        var result: any = await query(sql, [order_id, product_id, quantity]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return result;
}
