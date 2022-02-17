import { ErrorResponse } from "../models/errors";
import { User, user_schema } from "../models/users";
import { batch_find_products_by_ids } from "../services/product_services";
import { find_user_by_id, create_user, add_to_user_cart, get_user_cart_service } from "../services/user_services";

export function get_user_by_id(user_id: string) {
  let user = find_user_by_id(user_id);
  if (user) {
    let updated_user = user_schema.cast(user);
    return [200, updated_user];
  } else {
    return [404, { msg: "User not found" }];
  }
}

export function create_new_user(user: User) {
  let [err, error_data] = validate_user_data(user);
  if (err) {
    return [400, error_data];
  } else {
    let casted_user = user_schema.cast(user, { stripUnknown: true });
    let new_user = create_user(casted_user);
    return [200, new_user];
  }
}

export async function get_user_cart(user_id: number) {
  let cart: any = await get_user_cart_service(user_id);
  if (cart[0]) {
    var ids: any = cart[0]["shopping_cart"];
    var products = await batch_find_products_by_ids(ids);
    return [200, products]
  } else {
    return [404, { 'msg': "User not found" }];
  }
}

export async function add_product_to_cart(user_id: number, product_id: number) {
  let result = await add_to_user_cart(user_id, product_id);
  if (result) {
    return [200, {"msg": "Product added to cart!"}];
  } else {
    return [404, { 'msg': "User or Product not found" }];
  }
}

function validate_user_data(user: User) {
  let error_data: ErrorResponse = { errMsg: "", errType: "" };
  try {
    user_schema.validateSync(user);
  } catch (err: any) {
    error_data.errType = err.name;
    error_data.errMsg = err.errors;
    return [true, error_data];
  }
  return [false, {}];
}
