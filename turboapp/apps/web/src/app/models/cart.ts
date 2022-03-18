import { Product } from './product';
export class Cart {
  public product: Product;
  public quantity: number;

  constructor(clone: Cart = null) {
    this.product = null;
    this.quantity = 0;
    if (!!clone) {
      this.product = clone.product;
      this.quantity = clone.quantity;
    }
  }
}
