import { ErrorResponse } from "../models/errors";
import { Product, product_schema } from "../models/products";
import {
    create_product,
    find_product_by_id,
} from "../services/product_services";

export async function get_product_by_id(product_id: string) {
    let product = await find_product_by_id(product_id);
    if (product) {
        // let updated_product = product_schema.cast(product);
        return [200, product];
    } else {
        return [404, { msg: "Product not found" }];
    }
}

export async function create_new_product(product: Product) {
    let [err, error_data] = validate_product_data(product);
    if (err) {
        return [400, error_data];
    } else {
        let casted_product = product_schema.cast(product, {
            stripUnknown: true,
        });
        let new_product = await create_product(casted_product);
        return [200, new_product];
    }
}

function validate_product_data(product: Product) {
    let error_data: ErrorResponse = { errMsg: "", errType: "" };
    try {
        product_schema.validateSync(product);
    } catch (err: any) {
        error_data.errType = err.name;
        error_data.errMsg = err.errors;
        return [true, error_data];
    }
    return [false, {}];
}
