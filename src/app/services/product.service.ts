import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = '/product';

  productRef: AngularFirestoreCollection<product>;

  constructor(private db: AngularFirestore) {
    this.productRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<product> {
    return this.productRef;
  }
}
