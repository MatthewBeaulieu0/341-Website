import { ErrorResponse } from "../models/errors";
import { Product, product_schema } from "../models/products";
import {
  create_product,
  find_product_by_id,
} from "../services/product_services";

export function get_product_by_id(product_id: string) {
  let product = find_product_by_id(product_id***REMOVED***
  if (product) {
    let updated_product = product_schema.cast(product***REMOVED***
    return [200, updated_product];
  } else {
    return [404, { msg: "Product not found" }];
  }
}

export function create_new_product(product: Product) {
  let [err, error_data] = validate_product_data(product***REMOVED***
  if (err) {
    return [400, error_data];
  } else {
    let casted_product = product_schema.cast(product, { stripUnknown: true }***REMOVED***
    let new_product = create_product(casted_product***REMOVED***
    return [200, new_product];
  }
}

function validate_product_data(product: Product) {
  let error_data: ErrorResponse = { errMsg: "", errType: "" };
  try {
    product_schema.validateSync(product***REMOVED***
  } catch (err: any) {
    error_data.errType = err.name;
    error_data.errMsg = err.errors;
    return [true, error_data];
  }
  return [false, {}];
}
