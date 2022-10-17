import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FileUpload } from 'src/app/models/FileUpload';
import { product } from 'src/app/models/product';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  category :Category=new Category();
  categorylist = new Array<Category>();
  product:product;
  ErrorMessage: string = '';
  SuccessMessage = "";
  selectedFiles?: FileList;
  percentage = 0;
  currentFileUpload?: FileUpload;
  constructor(public firestore:AngularFirestore, public route: ActivatedRoute,private uploadService:FileUploadService,

    public router: Router) { 
    this.product=new product();
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.getCategory();
    this.getbyId(id);
  }
  public getbyId(docId: string): any {
    debugger;
    this.product.id=docId;
    return this.firestore.collection('products').doc(docId).valueChanges()
               .subscribe(item => {
                var productValues = item;
                if(productValues instanceof Object)
                 {
                   debugger;
                  this.product= productValues as product;
                  this.product.id= docId;

                 }
                 console.log(this.product)
                 this.uploadService.URL=this.product.image;
                 return item; 
                 // If you prefer including itemId back to object
                 // return {...item, id: docId}
               });
             
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
            this.product.image= this.uploadService.URL;
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
    debugger;
 // this.catService.create(this.category);
      try
      {

        if(this.uploadService.URL!="" && this.uploadService.URL!=undefined)
        {
          this.product.image=this.uploadService.URL;
        }
        this.firestore.firestore.collection("products").doc(this.product.id).set({
        category:this.product.category,
        date:this.product.date,
        stock:this.product.stock,
        description:this.product.description,
        image:this.product.image,
        origin:this.product.origin,
        price_per_piece: this.product.price_per_piece,
        storage:this.product.storage,
        title:this.product.title
   
        });
        this.SuccessMessage="Your record has been updated.";
        //this.router.navigateByUrl('/private/products');
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}
getCategory()
{
  let userDoc = this.firestore.firestore.collection(`categories`);
  debugger;
  userDoc.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      debugger
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
