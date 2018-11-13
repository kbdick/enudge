import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

export interface Prices {
  price: number;
}

export interface Carbons {
  percent: number;
}

export interface Solars {
  generation: number;
}

export interface Uses {
  consumption: number;
  demand: number;
}

export interface Users {
  address1: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  title = 'eNudge';

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

  constructor(private afs: AngularFirestore) { 
  // timestamp in milliseconds
  const currentTime = new Date().getTime();
  
  this.pricesCol = this.afs.collection('prices', ref => {
    return ref
             .limit(1)
      });
  this.prices = this.pricesCol.valueChanges();
  
  this.carbonsCol = this.afs.collection('carbons', ref => {
    return ref
             .limit(1)
      });
  this.carbons = this.carbonsCol.valueChanges();
  
  this.solarsCol = this.afs.collection('solars', ref => {
    return ref
             .limit(1)
      });
  this.solars = this.solarsCol.valueChanges();
  
  this.usesCol = this.afs.collection('uses', ref => {
    return ref
             .limit(1)
      });
  this.uses = this.usesCol.valueChanges();
  
  this.usersCol = this.afs.collection('users');
  this.users = this.usersCol.valueChanges();
  }
  
  ngOnInit() {
  }

}
