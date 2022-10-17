import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipping } from 'src/app/models/shipping';

@Component({
  selector: 'app-update-ship-method',
  templateUrl: './update-ship-method.component.html',
  styleUrls: ['./update-ship-method.component.css']
})
export class UpdateShipMethodComponent implements OnInit {

  shipMethod:Shipping;
  ErrorMessage: string = '';
  SuccessMessage = "";
  constructor(public firestore:AngularFirestore, public route: ActivatedRoute,

    public router: Router) { 
    this.shipMethod=new Shipping();
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.getbyId(id);
  }
  public getbyId(docId: string): any {
    this.shipMethod.id=docId;
    return this.firestore.collection('shipping').doc(docId).valueChanges()
               .subscribe(item => {
                var shipValues = item;
                if(shipValues instanceof Object)
                 {
                  this.shipMethod= shipValues as Shipping;
                  this.shipMethod.id= docId;
                 }
                 console.log(this.shipMethod)
                 return item; 
                 // If you prefer including itemId back to object
                 // return {...item, id: docId}
               });
             
  }
  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
    debugger;
 // this.catService.create(this.category);
      try
      {
        this.firestore.firestore.collection("shipping").doc(this.shipMethod.id).set({
          title:this.shipMethod.title,
          price:this.shipMethod.price,
          duration:this.shipMethod.duration,

   
        });
        this.SuccessMessage="Your record has been saved.";
        
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}
}
