import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { FileUpload } from 'src/app/models/FileUpload';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  ErrorMessage: string = '';
  SuccessMessage = "";
  @ViewChild("f") form: any;
  category:Category;
  constructor(public catService:CategoryService ,public firestore:AngularFirestore,
    public route: ActivatedRoute,
    public router: Router) {
    this.category=new Category();
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
  this.getbyId(id);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  public getbyId(docId: string): any {
    this.category.id=docId;
    return this.firestore.collection('categories').doc(docId).valueChanges()
               .subscribe(item => {
              
                 console.log("item"+item)
                 return item; 
                 // If you prefer including itemId back to object
                 // return {...item, id: docId}
               });
  }

  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
    debugger;
      try
      {
        this.firestore.firestore.collection("categories").doc(this.category.id).set({
          image: "https://firebasestorage.googleapis.com/v0/b/inglenook-e5595.appspot.com/o/categories%2Ffresh%20vegetables%20no%20texture202110191047518?alt=media&token=5f47b823-cb96-4a4c-9e59-7abf13173e2a"
   
        });
        this.SuccessMessage="Your record has been saved.";
        this.category.id="";
        this.category.image="";
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}

}
