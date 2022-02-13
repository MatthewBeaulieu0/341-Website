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

export async function find_product_by_id(product_id: string) {

  var get_product = function (product_id) {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT * FROM products WHERE ProductID = ?`;
        conn.query(sql, [product_id], function (err, result) {
            if (!err) {
                resolve(result***REMOVED***
            } else {
                resolve({
                    status: "error",
                    message: "Error Getting Data",
                    debug: err
            ***REMOVED***;
            }
    ***REMOVED***;
***REMOVED***;
};

try {
    var product = await get_product(***REMOVED***
    console.log(product***REMOVED***
} catch (error) {
    console.log(error***REMOVED***
}
}

export function create_product(product: any) {
  try {
    product_db[product.name] = product;
  } catch (err: any) {
    return null;
  }
  return product_db[product.name];
}
