import { ErrorResponse } from "../models/errors";
import { Filter, filter_schema, product_schema } from "../models/products";
import {
    create_product,
    filter_products,
    find_product_by_id,
} from "../services/product_services";

export async function get_product_by_id(product_id: number) {
    let product: any = await find_product_by_id(product_id);
    console.log(product)
    if (product.length > 0) {
        // let updated_product = product_schema.cast(product);
        return [200, product];
    } else {
        return [404, { msg: "Product not found" }];
    }
}

export async function create_new_product(product: any) {
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

export async function get_filtered_products(filter: Filter) {
    let stripped_filer = filter_schema.cast(filter, {
        stripUnknown: true,
    });

    let [err, error_data] = validate_filter_data(stripped_filer);
    if (err) {
        return [400, error_data];
    } else {
        let products = await filter_products(stripped_filer);
        return [200, products];
    }
}

function validate_product_data(product: any) {
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

function validate_filter_data(filter: Filter) {
    let error_data: ErrorResponse = { errMsg: "", errType: "" };
    try {
        filter_schema.validateSync(filter);
    } catch (err: any) {
        error_data.errType = err.name;
        error_data.errMsg = err.errors;
        return [true, error_data];
    }
    return [false, {}];
}
