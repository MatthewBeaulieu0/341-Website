export function transform_orders(orders: string) {
    let diffOrders = orders.split(",");
    console.log(diffOrders);
    var data = [];
    for (var i = 0; i < diffOrders.length; i++) {
        let megaString = diffOrders[i].split(";");
        data[i] = [] as any;
        for (var j = 0; j < megaString.length; j++) {
            let order_tuple:any = megaString[j].split(':');
            data[i][j] = {"product_id": order_tuple[0], "quantity": order_tuple[1], "name": ""}
        }
    }
    return data;
}
