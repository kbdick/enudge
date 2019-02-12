import { Component, OnInit } from '@angular/core';
//import { DataService } from '../services/data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carbons } from '../carbon/carbons';
import { Prices } from '../price/prices';
import { Solars } from '../solar/solars';
import { Consumptions } from '../consumption/consumptions';
import { Users } from '../user/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  pricesCol: AngularFirestoreCollection<Prices>;
  prices: Observable<Prices[]>;
  carbonsCol: AngularFirestoreCollection<Carbons>;
  carbons: Observable<Carbons[]>;
  solarsCol: AngularFirestoreCollection<Solars>;
  solars: Observable<Solars[]>;
  consumptionsCol: AngularFirestoreCollection<Consumptions>;
  consumptions: Observable<Consumptions[]>;
  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(
//    private ds: DataService, 
    private afs: AngularFirestore) {
    
    this.pricesCol = this.afs.collection('prices', pricesRef => {
      return pricesRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.prices = this.pricesCol.valueChanges();
    //this.prices = this.db.col$()
    
    this.carbonsCol = this.afs.collection('carbons', carbonsRef => {
      return carbonsRef
              .orderBy('validUntil', 'desc')
              .limit(1)
        });
    this.carbons = this.carbonsCol.valueChanges();
    //this.carbons = this.db.col$()
    
    this.solarsCol = this.afs.collection('solars', solarsRef => {
      return solarsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.solars = this.solarsCol.valueChanges();
    //this.solars = this.db.col$()
    
    this.consumptionsCol = this.afs.collection('consumptions', consumptionsRef => {
      return consumptionsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    this.consumptions = this.consumptionsCol.valueChanges();
    //this.consumptions = this.db.col$()
    
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
    //this.users = this.db.col$()
    
  }
    
    
    // Color Picker
    
    setPriceColor(price) {
      switch (true) {
        case price > 7:
          return 'red';
          break;
        case price > 3 && price <=7:
          return 'orange';
          break;
        case price <= 3:
          return 'green';
          break;
        case price != null:
          return 'gray';
          break;
      }
    }
    
    setCarbonColor(percent) {
      switch (true) {
        case percent > .75:
          return 'red';
          break;
        case percent > .50 && percent <= .75:
          return 'orange';
          break;
        case percent <= .50:
          return 'green';
          break;
        case percent != null:
          return 'gray';
          break;
      }
    }
    
    setGenerationColor(generation) {
      switch (true) {
        case generation < 0:
          return 'black';
          break;
        case generation <= 500 && generation < 1750:
          return 'orange';
          break;
        case generation >= 1075:
          return 'green';
          break;
        case generation != null:
          return 'gray';
          break;
      }
    }
    
    setDemandColor(demand, generation) {
      switch (true) {
        case demand > generation:
          return 'red';
          break;
        case demand >= generation && demand > 0:
          return 'orange';
          break;
        case demand <= generation:
          return 'green';
          break;
        case demand != null:
          return 'gray';
          break;
      }
    }
  
  ngOnInit() {
  }
  
}
