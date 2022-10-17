import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from 'src/app/models/category';
import { FileUpload } from 'src/app/models/FileUpload';
import { CategoryService } from 'src/app/services/category.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
declare const $: any;
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
@Injectable()
export class AddCategoryComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  ErrorMessage: string = '';
  SuccessMessage = "";
  @ViewChild("f") form: any;
  category:Category;
 
  constructor(public firestore:AngularFirestore,public uploadService:FileUploadService) {

    this.category=new Category();
    
   }

  ngOnInit(): void {
    debugger;
  }
  
  // ngAfterViewInit(): void {
  //   // $('.dropify').dropify();
  //   }
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
        
        this.currentFileUpload.targetPath='/categories';
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
   
    debugger;
      try
      {
        this.firestore.firestore.collection("categories").doc(this.category.id).set({
          image: this.uploadService.URL
   
        });
        this.SuccessMessage="Your record has been saved.";
        this.category.id="";
        this.category.image="";
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}

//   onSubmit()
//   {
//     debugger;
//     if (this.form.valid) 
//     {
//       try 
//       {
//        if(this.category.id!="" && this.category.id!=undefined)
//        {
//         this.firestore.firestore.collection("categories").doc("Dry fruit and vegitable by israr asad").set({
//           image: "https://firebasestorage.googleapis.com/v0/b/inglenook-e5595.appspot.com/o/categories%2Ffresh%20vegetables%20no%20texture202110191047518?alt=media&token=5f47b823-cb96-4a4c-9e59-7abf13173e2a"
//     });
//        }
       
//      }
//      catch (error) 
//      {
//        console.log(console.error());
       
//      }

//     }
// }
  // upload(): void {
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     this.selectedFiles = undefined;

  //     if (file) {
  //       this.currentFileUpload = new FileUpload(file);
  //       this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
  //         percentage => {
  //           this.percentage = Math.round(percentage ? percentage : 0);
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }

}
