import { Component, OnInit, ViewChild, ElementRef, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
var tmp = environment;
@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild("f") form: any;
  loading = false;
  ErrorMessage: string = '';
  SuccessMessage = "";
  ByEmail: boolean = true;
  id:string="";
  constructor(public firestore: AngularFirestore,public angularFireAuth: AngularFireAuth,public userService: UserService,public router: Router,public user: User)
  {
    console.log("auth state:",angularFireAuth.authState);
    // this.SignIn("admin@admin.com","Admin2021@")
    this.user=new User();
  }


  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      console.log(res.user?.getIdToken());
      console.log(res.user?.getIdTokenResult());
      console.log("uid:",res.user?.uid);
    
      localStorage.setItem('user', JSON.stringify(res.user));
      //const app = initializeApp(environment.firebase);
     // const db = getFirestore(app);
   // var data=  this.firestore.collection("products").get()
      //console.log("data",data)
      
      console.log('You are Successfully logged in!');
    
       this.router.navigateByUrl('/private/dashboard');
      
      })
     .catch(err => {
     console.log('Something is wrong:',err.message);
     }).catch(err => {
      console.log('Something is wrong:',err.message);
      });;
    }
  ngOnInit() {

    sessionStorage.clear();
    localStorage.clear();
   }
       /* Sign out */
SignOut() {
  this.angularFireAuth
  .signOut();
  }
  /* Sign up */
SignUp(email: string, password: string) {
  this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }





  async onSubmit() {
     this.ErrorMessage = "";
     if (this.form.valid) 
     {
       try 
       {
         this.user.Email;
        this.user.Password;
        if(this.user.Email!=undefined&&this.user.Password!=undefined)
        {
          this.SignIn(this.user.Email, this.user.Password);
        }
       
      }
      catch (error) 
      {
      }
 
    }
  }

}
