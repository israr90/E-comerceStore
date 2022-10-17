import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { Observable } from 'rxjs';
// import { initializeApp } from 'firebase/app';
// import { environment } from 'src/environments/environment';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { UserInfo } from 'firebase-admin/lib/auth/user-record';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAdmin';
  //userData: Observable<UserInfo>;
  //items: Observable<any[]>;
  constructor() 
  {
 
    //  this.items = firestore.collection('users').valueChanges();
    //   console.log(this.items);
    // this.getData();
    

    // const citiesCol = collection(db, 'users');
    // const citySnapshot =  getDocs(citiesCol);
    // citySnapshot.then(data =>{
    //   console.log(data.size);
    // });

    //this.SignIn("admin@admin.com","Admin2021@")
    // this.getAllCountry().subscribe((data: any) => {  
    //      var data = data;
    //      debugger;
    //     //  .map(e => {  
    //     //    return { id: e.payload.doc.id,  
    //     //       } 
    //     console.log("products",data);  
    //     });  
      //  let userDoc = this.firestore.firestore.collection(`products`);
    //
  //     let userDoc = this.firestore.firestore.collection(`products`);
  //       userDoc.get().then((querySnapshot) => {
  //      querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data());
  //  })
//add products 
//    const tutorialsRef = this.firestore.firestore.collection('products');
// const tutorial = { 
//                    category:  'Vegetables', 
//                    date:  '2022-12-01',
//                    description: 'Testing',
//                    image: '',
//                    origin: 'Natural Organics',
//                    price_per_piece: '',
//                    storage: 'Fridge Vegetable Drawer',
//                    title: 'Beetroots Test'
//                   };
// tutorialsRef.add(tutorial);

//update products
// const tutorialsRef = this.firestore.firestore.collection('products');
 
// tutorialsRef.doc('5hvt6AJLCwfZX1yInJJu').set({ 
//  category:  'Vegetables', 
//                      date:  '2022-12-01',
//                      description: 'Testing',
//                      image: '',
//                      origin: 'Natural Organics',
//                      price_per_piece: '',
//                      storage: 'Fridge Vegetable Drawer',
//                      title: ' Test by israr'
  
//    });



//})

//delete document
// delete(id: string): Promise<void> {
//   return this.tutorialsRef.doc(id).delete();
// }

  }

//   create(product: Policy){
//     this.createPolicy(product);
//   }
  
//   createPolicy(product: Policy){
//     return this.firestore.firestore.collection('policies').add(product);
// }
  
   

  // getAllProducts() {  
  //   return this.firestore.collection('products').snapshotChanges();  
  // }  

 






















// Get a list of cities from your database

 
  //  async getData(){
  //   const citiesRef = this.firestore.collection('users')
  //   //console.log(citiesRef);
  //   // const snapshot = await citiesRef.get();
  //   // snapshot.forEach(doc => {
  //   //   console.log(doc);
  //   // });
  //  }

  // getusers() { 
  //   return this.firestore.collection("users").snapshotChanges();
  // }
}
