export class frontendUser {
  public name: String;
  public seller: boolean;
  public age: number;
  public email: String;
  public address: String;
  constructor(clone: frontendUser = null) {
    this.name = '';
    this.age = 0;
    this.email = '';
    this.address = '';
    this.seller = false;
    if (!!clone) {
      this.name = clone.name;
      this.seller = clone.seller;
      this.age = clone.age;
      this.email = clone.email;
      this.address = clone.address;
    }
  }
}
