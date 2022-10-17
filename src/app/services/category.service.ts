import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private dbPath = 'categories';

  categegoryRef: AngularFirestoreCollection<Category>;

  constructor(private db: AngularFirestore) 
  {
    this.categegoryRef = this.db.collection(this.dbPath);
  }

   getAll(): AngularFirestoreCollection<Category> {
    return this.categegoryRef;
   }
   create(cat: Category): any {
     return this.categegoryRef.add(cat);
   }

  // update(id: string, data: any): Promise<void> {
  //   return this.tutorialsRef.doc(id).update(data);
  // }

  // delete(id: string): Promise<void> {
  //   return this.tutorialsRef.doc(id).delete();
  // }
}
