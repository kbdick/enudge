import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

// remove these interfaces and replace with classe imports

/*
export interface Prices {
  price: number;
  timestamp: number;
}

export interface Carbons {
  ba: string;
  percent: number;
  rating: number;
  switch: number;
}

export interface Solars {
  generation: number;
  timestamp: number;
}

export interface Uses {
  demand: string;
  timestamp: string;
}

export interface Users {
  address1: string;
}
*/
@Injectable({
  providedIn: 'root',
})

export class FirestoreService {
/*
  pricesCol: AngularFirestoreCollection<Prices>;
  prices: Observable<Prices[]>;
  carbonsCol: AngularFirestoreCollection<Carbons>;
  carbons: Observable<Carbons[]>;
  solarsCol: AngularFirestoreCollection<Solars>;
  solars: Observable<Solars[]>;
  usesCol: AngularFirestoreCollection<Uses>;
  uses: Observable<Uses[]>;
  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(private afs: AngularFirestore) { }

    this.pricesCol = this.afs.collection('prices', ref => {
      return ref
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.prices = this.pricesCol.valueChanges();
    
    this.carbonsCol = this.afs.collection('carbons', ref => {
      return ref
              .orderBy('validUntil', 'desc')
              .limit(1)
        });
    this.carbons = this.carbonsCol.valueChanges();
    
    this.solarsCol = this.afs.collection('solars', ref => {
      return ref
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.solars = this.solarsCol.valueChanges();
    
    this.usesCol = this.afs.collection('uses', ref => {
      return ref
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.uses = this.usesCol.valueChanges();
    
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
*/    
}
