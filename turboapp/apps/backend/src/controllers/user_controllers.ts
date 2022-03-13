import { ErrorResponse } from "../models/errors";
import { User, user_schema } from "../models/users";
import {
    add_order_to_orderline,
    get_orderline_by_order_id,
    get_orderline_by_order_id_and_product_id,
    increment_quantity,
} from "../services/orderline_services";
import { get_order } from "../services/order_services";
import { batch_find_products_by_ids } from "../services/product_services";
import {
    find_user_by_id,
    create_user,
    find_user_by_email,
} from "../services/user_services";
import { delete_product_by_id } from "../services/product_services";

const bcrypt = require("bcrypt");
const saltRounds = 4;
export async function get_user_by_id(user_id: number) {
    let user = await find_user_by_id(user_id);
    if (user) {
        return [200, user];
    } else {
        return [404, { msg: "User not found" }];
    }
}
export async function get_user_by_email(email: string) {
    console.log(email);
    let user = find_user_by_email(email);
    let casted_user = user_schema.cast(user, { stripUnknown: true });
    if (casted_user) {
        return [200, casted_user];
    } else {
        return [404, false];
    }
}
export async function create_new_user(user: any) {
    console.log("Create User:" + JSON.stringify(user));
    let [err, error_data] = validate_user_data(user);
    if (err) {
        return [400, error_data];
    } else {
        let casted_user = user_schema.cast(user, { stripUnknown: true });
        casted_user.password = await bcrypt.hash(
            casted_user.password,
            saltRounds
        );
        console.log(casted_user.password);
        let new_user = await create_user(casted_user);
        return [200, new_user];
    }
}

export async function get_user_cart(user_id: number) {
    let order: any = await get_order(user_id);
    if (!order[0]) {
        return [404, { msg: "User not found" }];
    }

    console.log(order);

    let order_id: number = order[0].order_id;
    let orderlines: any = await get_orderline_by_order_id(order_id);

    var product_ids: any = [];
    for (let orderline of orderlines) {
        product_ids.push(orderline.product_id);
    }

    var products: any = await batch_find_products_by_ids(product_ids);
    var data: any = [];
    products.forEach((product: any, index: any) => {
        data.push({ product: product, quantity: orderlines[index].quantity });
    });

    //console.log(data[0].product.product_id); // Someone wanted this iunno
    return [200, data];
}

export async function add_product_to_cart(
    user_id: number,
    product_id: number,
    quantity: number
) {
    let order: any = await get_order(user_id);
    if (!order[0]) {
        return [404, { msg: "User not found" }];
    }
    let order_id: number = order[0].order_id;

    let existing_order: any = await get_orderline_by_order_id_and_product_id(
        order_id,
        product_id
    );

    // console.log("EXISTING ORDER:   ", existing_order);

    if (existing_order[0]) {
        var result = await increment_quantity(order_id, product_id, quantity);
    } else {
        var result = await add_order_to_orderline(
            order_id,
            product_id,
            quantity
        );
    }
    console.log(result);

    if (result) {
        return [200, { msg: "Product added to cart!" }];
    } else {
        return [404, { msg: "User or Product not found" }];
    }
}

export async function delete_product_from_cart(
    user_id: number,
    product_id: number
) {
    let order: any = await get_order(user_id);
    if (!order[0]) {
        return [404, { msg: "User not found" }];
    }
    let order_id: number = order[0].order_id;
    let result = await delete_product_by_id(order_id, product_id);
    if (result) {
        return [200, { msg: "Product deleted from the cart!" }];
    } else {
        return [404, { msg: "User or Product not found" }];
    }
}
function validate_user_data(user: User) {
    let error_data: ErrorResponse = { errMsg: "", errType: "" };
    try {
        user_schema.validateSync(user);
    } catch (err: any) {
        error_data.errType = err.name;
        error_data.errMsg = err.errors;
        console.log(error_data);
        return [true, error_data];
    }

    return [false, {}];
}
