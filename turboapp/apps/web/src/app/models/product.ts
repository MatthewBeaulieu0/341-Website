export class Product {
    public name: String;
    public price: number;
    public image: string;
    public onSale: boolean;
    public salePrice?: number;
    public description: string;

    constructor(clone: Product= null){
        this.name = '';
        this.price = 0;
        this.image = '';
        this.onSale = false;
        this.salePrice = 0;
        this.description = '';

        if (!!clone) {
            this.name = clone.name;
            this.price = clone.price;
            this.image = clone.image;
            this.onSale = clone.onSale;
            this.salePrice = clone.salePrice;
            this.description = clone.description;
        }
    }
}  