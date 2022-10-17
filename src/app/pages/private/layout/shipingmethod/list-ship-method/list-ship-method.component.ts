import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Shipping } from 'src/app/models/shipping';

@Component({
  selector: 'app-list-ship-method',
  templateUrl: './list-ship-method.component.html',
  styleUrls: ['./list-ship-method.component.css']
})
export class ListShipMethodComponent implements OnInit {
  shipping :Shipping=new Shipping();
  shippinglist = new Array<Shipping>();
  ErrorMessage: string = '';
  SuccessMessage:string = "";
  constructor(public firestore: AngularFirestore,public router: Router)
   {

    }

  ngOnInit(): void {
    this.getShippingList();
  }
  getShippingList()         
  {
    let productDoc = this.firestore.firestore.collection(`shipping`);
    productDoc.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        debugger
        this.shipping=new Shipping();
        this.shipping.id=doc.id;
      
        var productName = doc.id;
        var productValues = doc.data();
  
        if(productValues instanceof Object)
        {
         this.shipping= productValues as Shipping;
         this.shipping.id= doc.id;
        }
        this.shippinglist?.push(this.shipping);
        console.log("list:",this.shippinglist)
  
      })
     
     })
    
   
  
  }
  delete(id:string){
    debugger
    try{
      const CatRef = this.firestore.firestore.collection('shipping');
      CatRef.doc(id).delete();
      this.SuccessMessage="you have successfully deleted."
      this.shippinglist=new Array<Shipping>();
      this.getShippingList();
    }
    catch(err)
  {    this.ErrorMessage="An error occured.Please try again."
  
    }
    
  }
}
