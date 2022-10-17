import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from 'src/app/models/category';
import { FileUpload } from 'src/app/models/FileUpload';
import { product } from 'src/app/models/product';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:product;
  ErrorMessage: string = '';
  SuccessMessage = "";
  selectedFiles?: FileList;
  percentage = 0;
  category :Category=new Category();
  categorylist = new Array<Category>();
  currentFileUpload?: FileUpload;
  
  constructor(public firestore:AngularFirestore,private uploadService:FileUploadService) { 
    this.product=new product();
  }

  ngOnInit(): void {

    
    this.getCategory();

   
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  
  
   upload(): void {
     debugger;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.currentFileUpload.targetPath='/products'
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
      try
      {
        // let productDoc = this.firestore.firestore.collection(`products`);
        // productDoc.get().then((querySnapshot) => {
       
        //    var d= +querySnapshot.docs[querySnapshot.size-1].id+1 +"";
    
        // int count = (int) dataSnapshot.getChildrenCount();  
        const current = new Date();      
         const timestamp = (current.getTime())+"";
          debugger;
          this.firestore.firestore.collection("products").doc(timestamp).set({
          category:this.product.category,
          date:this.product.date,
          stock:this.product.stock,
          description:this.product.description,
          image:this.uploadService.URL,
          origin:this.product.origin,
          price_per_piece: +this.product.price_per_piece,
          storage:this.product.storage,
          title:this.product.title
     
          });
       console.log(this.product.price_per_piece)
       // });


        
      
        this.product=new product();
        this.SuccessMessage="Your record has been saved.";
        this.percentage=0;
        
        
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}
getCategory()
{
  let userDoc = this.firestore.firestore.collection(`categories`);

  userDoc.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      this.category=new Category();
      this.category.id=doc.id;
    
      var categoryName = doc.id;
      var categoryValues = doc.data();

      if(categoryValues instanceof Object)
      {
        for (const [key,value] of Object.entries(categoryValues))
        {
          console.log(`${key} , ${value}`);
          this.category.image=value;
        }

      }
      this.categorylist?.push(this.category);
      
      console.log("list:",this.categorylist)

    })
   
   })

}

}
