import { conn } from "..";

// Result is a ResultSetHeader
export function query(sql: string, params: Array<any>): unknown {
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