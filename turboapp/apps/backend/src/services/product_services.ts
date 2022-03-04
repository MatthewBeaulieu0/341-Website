// import { ResultSetHeader } from "mysql2";
import { query } from "../helpers/query_helper";
import { Filter } from "../models/products";
// import { Product } from "../models/products";

export async function find_product_by_id(product_id: number) {
    var sql = `SELECT * FROM product WHERE product_id = ?`;
    try {
        var product = await query(sql, [product_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return product;
}

export async function delete_product_by_id(
    order_id: number,
    product_id: number
) {
    var sql = `DELETE FROM fake_amazon.orderline WHERE product_id = ? AND order_id=?`;
    try {
        var result = await query(sql, [product_id, order_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return result;
}

export async function batch_find_products_by_ids(product_ids: Array<string>) {
    var sql = `SELECT * FROM product WHERE product_id IN (?)`;
    try {
        var products = await query(sql, [product_ids]);
        console.log(products);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return products;
}

export async function create_product(product: any) {
    var sql = "INSERT INTO product (??) VALUES (?)";
    var params = [];
    var keys = [];

    for (const [key, value] of Object.entries(product)) {
        keys.push(key);
        params.push(value);
    }

    try {
        let result: any = await query(sql, [keys, params]);

        let product_id = result.insertId;

        var created_product = await find_product_by_id(product_id);
    } catch (error) {
        console.log(error);
    }

    return created_product;
}

export async function filter_products(filter: Filter) {
    var sql = `SELECT * FROM product WHERE `;
    var params = [];
    var filter_cnt = 0;

    if ("name" in filter) {
        sql = sql + "name LIKE ?";
        params.push("%" + filter.name + "%");
        filter_cnt++;
    }
    if ("price" in filter) {
        if (filter_cnt > 0) {
            sql = sql + " AND ";
        }

        sql = sql + " price <= ? ";
        params.push(filter.price);
    }
    if ("category" in filter) {
        if (filter_cnt > 0) {
            sql = sql + " AND ";
        }
        sql = sql + "category LIKE ?  ";
        params.push(filter.category);
        filter_cnt++;
    }

    sql = sql + "LIMIT ?, ?";
    params.push(filter.skip, filter.limit);

    try {
        var products = await query(sql, params);
    } catch (error) {
        console.log(error);
    }

    return products;
}
