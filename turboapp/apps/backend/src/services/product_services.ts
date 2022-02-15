// import { ResultSetHeader } from "mysql2";
import { conn } from "..";
import { Filter, Product } from "../models/products";
// import { Product } from "../models/products";

// Result is a ResultSetHeader
function query(sql: string, params: Array<any>): unknown {
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
export async function find_product_by_id(product_id: number) {
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

export async function create_product(product: Product) {
    var sql = "INSERT INTO products (??) VALUES (?)";
    var params = [];
    var keys = [];
    
    
    for (const [key, value] of Object.entries(product)) {
        keys.push(key);
        params.push(value);
    }
    
    try {
        let result: any = await query(sql, [keys, params]);
        console.log(result);

        let product_id = result.insertId;

        var created_product = await find_product_by_id(product_id);

    } catch (error) {
        console.log(error);
    }

    return created_product
}

export async function filter_products(filter: Filter) {
  var sql = `SELECT * FROM products WHERE `;
  var params = [];
  var filter_cnt = 0;

  if ('name' in filter) {
    sql = sql + "name LIKE \'%??%\' "
    params.push(filter.name);
    filter_cnt++;
  }
  if ('price' in filter) {

    if (filter_cnt>0) {sql = sql + ' AND '}
    
    sql = sql + "price <= ?"
    params.push(filter.price);
  }

  sql = sql + "LIMIT ?, ?"
  params.push(filter.skip, filter.limit)

  try {
    var products = await query(sql, params);
  } catch (error) {
      console.log(error);
  }

  return products
}
