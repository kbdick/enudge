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
  }

  setPriceColor(price) {
    switch (true) {
      case price> 7:
        return 'red';
      case price > 3 && price <=7:
        return 'orange';
      case price <= 3:
        return 'green';
      case price != null:
        return 'gray';
    }
  }
  
  setCarbonColor(percent) {
    switch (true) {
      case percent > .75:
        return 'red';
      case percent > .50 && percent <= .75:
        return 'orange';
      case percent <= .50:
        return 'green';
      case percent != null:
        return 'gray';
    }
  }
  
  setGenerationColor(generation) {
    switch (true) {
      case generation < 0:
        return 'red';
      case generation <= 500 && generation < 1750:
        return 'orange';
      case generation <= 1075:
        return 'green';
      case generation != null:
        return 'gray';
    }
  }
  
    setDemandColor(demand, generation) {
    switch (true) {
      case demand < generation:
        return 'red';
      case demand <= generation && demand < 0:
        return 'orange';
      case demand <= 0:
        return 'green';
      case demand != null:
        return 'gray';
    }
  }
  
  ngOnInit() {
  }

}
