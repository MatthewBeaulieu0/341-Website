import { ErrorResponse } from "../models/errors";
import { User, user_schema } from "../models/users";
import { find_user_by_id, create_user } from "../services/user_services";

export function get_user_by_id(user_id: string) {
  let user = find_user_by_id(user_id***REMOVED***
  if (user) {
    let updated_user = user_schema.cast(user***REMOVED***
    return [200, updated_user];
  } else {
    return [404, { msg: "User not found" }];
  }
}

export function create_new_user(user: User) {
  let [err, error_data] = validate_user_data(user***REMOVED***
  if (err) {
    return [400, error_data];
  } else {
    let casted_user = user_schema.cast(user, { stripUnknown: true }***REMOVED***
    let new_user = create_user(casted_user***REMOVED***
    return [200, new_user];
  }
}

export function get_user_cart(user_id: string) {
  return [200, { user_id: user_id }];
}

export function add_product_to_cart(product: any) {
  return [200, product];
}

function validate_user_data(user: User) {
  let error_data: ErrorResponse = { errMsg: "", errType: "" };
  try {
    user_schema.validateSync(user***REMOVED***
  } catch (err: any) {
    error_data.errType = err.name;
    error_data.errMsg = err.errors;
    return [true, error_data];
  }
  return [false, {}];
}