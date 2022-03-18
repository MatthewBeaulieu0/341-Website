export class frontendUser {
  public name: String;
  public seller: boolean;
  public age: number;
  public email: String;
  public address: String;
  public user_id: number;
  constructor(clone: frontendUser = null) {
    this.name = '';
    this.age = 0;
    this.email = '';
    this.address = '';
    this.seller = false;
    this.user_id = 0;
    if (!!clone) {
      this.name = clone.name;
      this.seller = clone.seller;
      this.age = clone.age;
      this.email = clone.email;
      this.address = clone.address;
      this.user_id = clone.user_id;
    }
  }
}
