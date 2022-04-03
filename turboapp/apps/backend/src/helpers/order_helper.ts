export function transform_orders(orders: string) {
    add_order_to_string();
    let diffOrders = orders.split(",");
    console.log(diffOrders);
    var data = [];
    for (var i = 0; i < diffOrders.length; i++) {
        let megaString = diffOrders[i].split(";");
        data[i] = [] as any;
        for (var j = 0; j < megaString.length; j++) {
            data[i][j] = megaString[j];
        }
    }
    console.log(data[0][0]);
    console.log(data);
}
//Function to add the current order to the string
function add_order_to_string() {}
