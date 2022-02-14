import { conn } from "..";

let product_db: any = {
    product_1: {
        name: "super cool usb 5000",
        desc: "the name says it all",
        price: 69,
        currency: "CAD",
        brand: "superCoolBrand",
        seller: "superCoolCompany",
        other: {},
        stock: 69,
    },
};

function query(sql: string, params: string) {
    return new Promise(function (resolve, reject) {
        conn.query(sql, [params], function (err: any, result: unknown) {
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
        var product = await query(sql, product_id);
        console.log(product);
    } catch (error) {
        console.log(error);
    }

    return product;
}

export function create_product(product: any) {
    try {
        product_db[product.name] = product;
    } catch (err: any) {
        return null;
    }
    return product_db[product.name];
}
