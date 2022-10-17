import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase-admin';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit 
{
  category :Category=new Category();
  categorylist = new Array<Category>();
  ErrorMessage: string = '';
  SuccessMessage:string = "";

 // itemsCollection: AngularFirestoreCollection<category>;
 // itemDoc: AngularFirestoreDocument<category>;
  constructor(public firestore: AngularFirestore,public angularFireAuth: AngularFireAuth,public router: Router,private categoryService: CategoryService)
  {
   // this.tutorial = firestore.doc('categories');
  // this.retrieveTutorials();
  
  }
  
  

  ngOnInit(): void {
    this.getCategory();
    
    
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

//service

//

updateCategory()
{
 const tutorialsRef = this.firestore.firestore.collection('categories');

 tutorialsRef.doc('Dry fruit and vegitable by israr').set({ image:  'test'});

}
delete(id:string){
  debugger
  try{
    const CatRef = this.firestore.firestore.collection('categories');
    CatRef.doc(id).delete();
    this.SuccessMessage="you have successfully deleted."
    this.categorylist=new Array<Category>();
    this.getCategory();
  }
  catch(err)
{    this.ErrorMessage="An error occured.Please try again."

  }
  
}

}

  

   

