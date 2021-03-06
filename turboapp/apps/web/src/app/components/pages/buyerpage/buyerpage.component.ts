import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalUserService } from 'src/app/services/global-user.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyerpage',
  templateUrl: './buyerpage.component.html',
  styleUrls: ['./buyerpage.component.css']
})
export class BuyerpageComponent implements OnInit {

  orders: any;
  name_id: string[] = []
  constructor(
  private globalUserService: GlobalUserService,
  private httpClient: HttpClient,
  private getProductIdService: ProductsService,
  private router: Router
  ) {

    
   }

  ngOnInit(): void {
    console.log("BUYER PAGE");
     this.getOrders().subscribe((response) => {
      this.orders = response.data[1].orders;
      
});
  }



  getOrders(): any{
    return this.httpClient
      .get<any>(
        'http://localhost:3001/user/id/' + this.globalUserService.getNewUser().user_id + '/orders'
      )
  //     .subscribe((response) => {
  //       console.log(response.data[1].orders);
  //       response.data[1].orders;
        
  // });
  }

//   changeIdToName(id: number){
    
//     this.httpClient.get('http://localhost:3001/product/id/' + id.toString())
//     .subscribe((response) => {
//       console.log(response[1][0].name);
//       return response[1][0].name;
// });
//   }

  routeToMainPage(){
    this.router.navigate['/mainPage']
  }

}
