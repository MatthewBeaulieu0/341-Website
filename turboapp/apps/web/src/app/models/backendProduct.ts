export class backendProduct {
    public name: string;
    public description: string;
    public price: number;
    public brand: string;
    public seller: string;
    public other: object;
    public stock: number;
    public link: string;
    public category: string;
    constructor(clone: backendProduct = null) {
      this.name = '';
      this.description = '';
      this.price = 0;
      this.brand = '';
      this.seller = '';
      this.other = null;
      this.stock = 0;
      this.link = '';
      this.category = '';

      if (!!clone) {
        this.name = clone.name;
        this.description = clone.description;
        this.price = clone.price;
        this.brand = clone.brand;
        this.seller = clone.seller;
        this.other = clone.other;
        this.stock = clone.stock;
        this.link = clone.link;
        this.category = clone.category;
      }
    }
  }