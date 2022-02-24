import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore,
    private authenticationService: AuthenticationService) { }

  getProducts(): Observable<any> {
    const db = this.firestore.collection
    ('products', ref => ref.orderBy('createTimestamp')).snapshotChanges().pipe(map(
      (action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as object;
          const id = a.payload.doc.id;
          const res = {id: id, ...data};
          return res;
        });
      }
    ));

    return db;
  }
}
