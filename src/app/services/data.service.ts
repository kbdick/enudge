import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
//import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Observable, combineLatest, of, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

//type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
//type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root',
})

export class DataService {

  constructor(
    private afs: AngularFirestore,
//    private auth: AuthService,
    private router: Router
  ) {}

/*
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref
  }
  
  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref 
  }

  /// Simple Get Data
  
  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().map(doc => {
      return doc.payload.data() as T
    })
  }
  
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[]
    });
  }
  
  // Get Collection with Ids
  
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id();
        return { id,...data };
      });
    });
  }

  // Timestamp
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp()
  }
  
  // Set Timestamp
  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp,
    })
  }

*/

}
