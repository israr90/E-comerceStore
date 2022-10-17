import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product :product=new product();
  productlist = new Array<product>();
  ErrorMessage: string = '';
  SuccessMessage:string = "";
  constructor(public firestore: AngularFirestore,public router: Router,private productService: ProductService)
   {

    }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts()
  {
  
    let productDoc = this.firestore.firestore.collection(`products`).orderBy("title","asc");
    productDoc.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        debugger
        this.product=new product();
        this.product.id=doc.id;
      
        var productName = doc.id;
        var productValues = doc.data();
  
        if(productValues instanceof Object)
        {
          // for (const [key,value] of Object.entries(productValues))
          // {
          //   debugger;

          //   console.log(`${key} , ${value}`);
          //   this.product.image=value;
          // }
         this.product= productValues as product;
         this.product.id= doc.id;
        }
        this.productlist?.push(this.product);
        
  
      })
     
     })
    
   
  
  }
  delete(id:string){
    debugger
    try{
      const CouponRef = this.firestore.firestore.collection('products');
      CouponRef.doc(id).delete();
      this.SuccessMessage="you have successfully deleted."
      this.productlist=new Array<product>();
      this.getProducts();
    }
    catch(err)
  {    this.ErrorMessage="An error occured.Please try again."
  
    }
    
  }
  details(id:string){

  }
}
