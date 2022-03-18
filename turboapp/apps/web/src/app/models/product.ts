export class Product {
    public product_id: number;
    public name: String;
    public description: string;
    public price: number;
    public currency: string;
    public brand: String;
    public seller: string;
    public stock: number;
    public link: string;
    

    constructor(clone: Product= null){
        this.product_id = 0;
        this.name = '';
        this.description = '';
        this.price = 0;
        this.currency = ''
        this.brand = '';
        this.seller = '';
        this.stock = 0;
        this.link = '';
        

        if (!!clone) {
            this.product_id = clone.product_id;
            this.name = clone.name;
            this.description = clone.description;
            this.price = clone.price;
            this.currency = clone.currency;
            this.brand = clone.brand;
            this.seller = clone.seller;
            this.stock = clone.stock;
            this.link = clone.link;
            
        }
    }
}  