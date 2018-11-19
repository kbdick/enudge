import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

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

@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.scss']
})

export class NudgeComponent implements OnInit {

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
  
  setConsumeColor(price, percent, generation, demand) {
    switch (true) {
      case price > 3 || percent > 0.75 || generation < 500 || (parseInt(demand) / 1000) > generation:
        return 'red';
      case (price > 3 && price <=7) || (percent > .50 && percent <= .75) || (generation <= 500 && generation < 1750) || (parseInt(demand) / 1000) >= generation && (parseInt(demand) / 1000) > 0:
        return 'orange';
      case price <= 3 || percent <= .50 || generation >= 1075 || (parseInt(demand) / 1000) <= generation:
        return 'green';
      case price != null:
        return 'gray';
    }
  }
 
  isEnvironmental: boolean = true;
 
 setConsumeBoolean(price, percent, generation, demand) {
    switch (true) {
      case price > 3 || percent > 0.75 || generation < 500 || (parseInt(demand) / 1000) > generation:
        return false;
      case (price > 3 && price <=7) || (percent > .50 && percent <= .75) || (generation <= 500 && generation < 1750) || ((parseInt(demand) / 1000) >= generation && (parseInt(demand) / 1000) > 0):
        return false;
      case price <= 3 || percent <= .50 || generation >= 1075 || (parseInt(demand) / 1000) <= generation:
        return true;
      case price != null:
        return false;
    }
  };
  
 
  ngOnInit() {
  }

}
