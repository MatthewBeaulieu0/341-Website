import { conn } from "..";
// import { Product } from "../models/products";

function query(sql: string, params: Array<any>) {
    return new Promise(function (resolve, reject) {
        conn.query(sql, params, function (err: any, result: unknown) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
export async function find_product_by_id(product_id: string) {
    var sql = `SELECT * FROM products WHERE ProductID = ?`;
    try {
        var product = await query(sql, [product_id]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return product;
}

export async function batch_find_products_by_ids(product_ids: Array<string>) {
    var sql = `SELECT * FROM products WHERE ProductID IN ?`;
    try {
        var products = await query(sql, [product_ids]);
    } catch (error) {
        console.log(error);
        throw error;
    }

    return products;
}

export async function create_product(product: any) {
    var sql = "INSERT INTO products (??) VALUES (?)";
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

    return created_product
}
