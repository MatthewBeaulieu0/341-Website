
import * as chai from "chai";
import * as mocha from "mocha";
import { get_product_by_id } from "../../src/controllers/product_controller" 

const expect = chai.expect;
const describe = mocha.describe;
const it = mocha.it;

let test_product: any = {
    product_id: 1,
    name: "string",
    description: "string",
    price: 1,
    brand: "string",
    seller: "string",
    stock: 1,
    link: "string",
    category: "string",
}

describe('Product Controllers', async function(){
    describe('get_product_by_id', async function(){
        it('should return a product with all the fields in the product schame', async function(){
            let data: any = await get_product_by_id(1);
            let product: any = data[1][0]

            Object.entries(test_product).forEach(
                ([field, value]) => {
                    expect(product).to.have.property(field);
                    expect(product[field]).to.be.a(typeof(value));
                })
        });
    });
});