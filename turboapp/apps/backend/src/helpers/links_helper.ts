export function parse_links(products: any) {
    for (let product of products) {
        let links = product.link.split(", ");
        product.link_array = links;
        product.link = links[0];
    }
    return products;
}
