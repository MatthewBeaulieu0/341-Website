
import * as chai from "chai";
import * as mocha from "mocha";
import { create_new_product, get_filtered_products, get_product_by_id } from "../../src/controllers/product_controller" 

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

describe('Product Controllers', function(){
    describe('# get_product_by_id', function(){

        it('return a product with all the fields in the product schema', async function(){
            let data: any = await get_product_by_id(1);
            let product: any = data[1][0]
            Object.entries(test_product).forEach(
                ([field, value]) => {
                    expect(product).to.have.property(field);
                    expect(product[field]).to.be.a(typeof(value));
                })
        });
        it('return a 200 response code if succesful', async function(){
            let data: any = await get_product_by_id(1);
            expect(data[0]).to.equal(200);
        });
        it('return 404 responce code if no product found', async function(){
            let data: any = await get_product_by_id(80);
            expect(data[0]).to.equal(404);
        });
    });
    describe('# create_new_product', function(){
        let invalid_product: any = {
            name: 1,
            description: "string",
            brand: "string",
            seller: "string",
            stock: 1,
            link: "string",
            category: "string",
        }
        let valid_product = {
            name: "string",
            description: "string",
            price: 1,
            brand: "string",
            seller: "string",
            stock: 1,
            link: "string",
            category: "string",
        }
        it('return 400 bad request if passed invalid field.', async function(){
            let data = await create_new_product(invalid_product);
            let status = data[0]
            expect(status).to.equal(400);
        });
        it('return 200 if passed valid product', async function(){
            let data: any = await create_new_product(valid_product);
            let status = data[0]
            console.log(data);
            expect(status).to.equal(200);
        });
    });
    describe('# get_filtered_products', function(){
        it('should only return products with substring of name in it.', async function(){
            let filter: any = {
                "name": "e",
                "limit": 100,
                "skip": 0
            }
            let result = await get_filtered_products(filter);

            let products: any = result[1];
            
            for(const product of products) expect(product.name).to.contain(filter.name);
        });

        it('should only return products with a price less than or equal to filter.', async function(){
            let filter: any = {
                "price": 50,
                "limit": 100,
                "skip": 0
            }
            let result = await get_filtered_products(filter);

            let products: any = result[1];
            
            for(const product of products) expect(product.price).to.be.lessThanOrEqual(filter.price);
        });

        it('should only return products with listed category.', async function(){
            let filter: any = {
                "category": "food",
                "limit": 100,
                "skip": 0
            }
            let result = await get_filtered_products(filter);

            let products: any = result[1];
            
            for(const product of products) expect(product.category.toUpperCase()).to.equal(filter.category.toUpperCase());
        });

        it('should only return limited number products when limited.', async function(){
            let filter: any = {
                "name": "",
                "limit": 1,
                "skip": 0
            }
            let result = await get_filtered_products(filter);

            let products: any = result[1];
            
            expect(products.length).to.be.equal(1);
        });

    });
});