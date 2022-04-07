import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalUserService } from 'src/app/services/global-user.service';
import { UnionType } from 'typescript';

@Component({
  selector: 'app-buyerpage',
  templateUrl: './buyerpage.component.html',
  styleUrls: ['./buyerpage.component.css']
})
export class BuyerpageComponent implements OnInit {

  orders: any;
  //testOrder : string[][]

  constructor(
  private globalUserService: GlobalUserService,
  private httpClient: HttpClient,
  ) {

    
   }

  ngOnInit(): void {
    console.log("BUYER PAGE");
     this.getOrders().subscribe((response) => {
      this.orders = response.data[1].orders;
      
});

//this.changeIdToName("1");
  }

  getOrders(): any{
    return this.httpClient
      .get<any>(
        'http://localhost:3001/user/id/2/orders'
      )
  //     .subscribe((response) => {
  //       console.log(response.data[1].orders);
  //       response.data[1].orders;
        
  // });
  }

  changeIdToName(id: string){
    this.httpClient.get('http://localhost3001/product/id/' + id)
    .subscribe((response) => {
      console.log(response);
      return response[1].name;
      
});
  }

  routeToMainPage(){
    //this.router.navigate['/mainPage']
  }

  transform_orders(orders: string) {
    let diffOrders = orders.split(",");
    console.log(diffOrders);
    var data = [];
    for (var i = 0; i < diffOrders.length; i++) {
        let megaString = diffOrders[i].split(";");
        data[i] = [] as any;
        for (var j = 0; j < megaString.length; j++) {
            let order_tuple:any = megaString[j].split(':');
            data[i][j] = {"product_id": order_tuple[0], "quantity": order_tuple[1]}
        }
    }
    return data;
}

}
