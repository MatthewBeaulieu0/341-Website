export class Product {
  public product_id: number;
  public name: string;
  public description: string;
  public price: number;
  public brand: string;
  public seller: string;
  public stock: number;
  public link: string;
  public featured: boolean;
  public link_array: string[];
  constructor(clone: Product = null) {
    this.product_id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.brand = '';
    this.seller = '';
    this.stock = 0;
    this.link = '';
    this.featured = false;
    this.link_array = null;
    if (!!clone) {
      this.product_id = clone.product_id;
      this.name = clone.name;
      this.description = clone.description;
      this.price = clone.price;
      this.brand = clone.brand;
      this.seller = clone.seller;
      this.stock = clone.stock;
      this.link = clone.link;
      this.featured = clone.featured;
      this.link_array = clone.link_array;
    }
  }
}
