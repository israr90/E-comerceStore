import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { order } from 'src/app/models/order';
import { Search } from 'src/app/models/search';
import { shipping_address } from 'src/app/models/shipping_address';
import { ExcelService } from 'src/app/services/excel.service';

declare  var jQuery:  any;
declare function  print():any;
 

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  order :order=new order();
  orderlist = new Array<order>();
  ErrorMessage: string = '';
  SuccessMessage:string = "";
  shipping_Address:shipping_address=new shipping_address();
  model=new Search();
  constructor(public firestore: AngularFirestore,public router: Router,private excelService:ExcelService)
  {
}

  ngOnInit(): void {
  this.getOrder();
  

    
  }
  print()
  {
    print();
  }
 
  getOrder()
  {
    let usersTable = this.firestore.firestore.collection(`users`);
    usersTable.get().then((UserQuerySnapShot) => 
    {
      UserQuerySnapShot.forEach((user) => {
        // var UserId = user.id;
      
        let orders =  this.firestore.firestore.collection(`users/${user.id}/orders`).orderBy('date','desc')
        orders.get().then((orderQuery) => {
          orderQuery.forEach((ord) =>{
            console.log(ord)
            this.order=new order();
            debugger;
            //console.log(ord.id,ord.data())
            var OrderValues = ord.data();
  
            if(OrderValues instanceof Object)
            {
              this.order= OrderValues as order;
              this.order.userId=user.id;
              this.order.orderId=ord.id;
              this.orderlist.push(this.order);
              
            }
         
          })
           
        })
        //var productValues = doc.data();
      })
     
     })
//r
     
    console.log("order list by asad con",this.orderlist);
   
  
  }
  changestatus(order:order)
  {
    debugger;
    try
    {
      order.status="Delivered";
       this.firestore.firestore.collection(`users/${order.userId}/orders/`).doc(order.orderId).set(
        order)
        console.log("success")
    }
    catch(err){
console.log("error")
    }
console.log(order)
  }
  details(order:order){
    debugger;
 
    this.order=order;
   // this.shipping_Address=this.order.shipping_address;
    
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.orderlist, 'Order_data');
  }

  Delete(order:order){
    debugger
    try{
      const CouponRef = this.firestore.firestore.collection(`users/${order.userId}/orders/`);
      CouponRef.doc(order.orderId).delete();
      this.SuccessMessage="you have successfully deleted."
      this.orderlist=new Array<order>();
      this.getOrder();
    }
    catch(err)
  {    this.ErrorMessage="An error occured.Please try again."
  
    }
    
  }
  ClearSearch(){
this.model.StartDate="";
this.model.ToDate="";
this.getOrder();
  }
  Search(){
    
    if(this.model.StartDate==undefined || this.model.StartDate=="")
    {
      return;
    }
    if(this.model.ToDate==undefined || this.model.ToDate=="")
    {
      return;
    }
    this.orderlist= this.orderlist.filter((item: any) =>
    item.date >= this.model.StartDate && item.date <= this.model.ToDate
);

  }

}
