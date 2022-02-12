let product_db: any = {
  product_1: {
    name: "super cool usb 5000",
    desc: "the name says it all",
    price: 69,
    currency: "CAD",
    brand: "superCoolBrand",
    seller: "superCoolCompany",
    other: {},
    stock: 69,
  },
};

export function find_product_by_id(product_id: string) {
  try {
    return product_db[product_id];
  } catch (err: any) {
    return null;
  }
}

export function create_product(product: any) {
  try {
    product_db[product.name] = product;
  } catch (err: any) {
    return null;
  }
  return product_db[product.name];
}
