import { Component, OnInit } from '@angular/core';
//import { DataService } from '../services/data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carbons } from '../carbon/carbons';
import { Prices } from '../price/prices';
import { Solars } from '../solar/solars';
import { Consumptions } from '../consumption/consumptions';
import { Users } from '../user/users';
import { FirestoreService } from '../../core/firestore.service';
import 'rxjs/add/operator/map';

export interface DashboardColumns {
  "Hourly Price": number;
  "Fossil Fuel Footprint": number;
  "Solar Generation": number;
  "Demand": number;
  }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['Hourly Price', 'Fossil Fuel Footprint', 'Solar Generation', 'Demand'];
  
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
    public db: FirestoreService, 
    private afs: AngularFirestore) { }
    
  
  ngOnInit() {
    
    this.carbons = this.db.col$('carbons', carbonsRef => {
      return carbonsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    
    this.prices = this.db.col$('prices', pricesRef => {
      return pricesRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    
    this.solars = this.db.col$('solars', solarsRef => {
      return solarsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    
    this.consumptions = this.db.col$('consumptions', consumptionsRef => {
      return consumptionsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    
    this.users = this.db.col$('users')
    
  }
  
  // Color Picker
    
    setPriceClass (price) {
    switch (true) {
        case price > 7: {
          return 'bad';
          break;
        }
        case price > 3 && price <=7: {
          return 'okay';
          break;
        }
        case price <= 3: {
          return 'good';
          break;
        }
        case price = null: {
          return 'noData';
          break;
        }
      }
    }
    
    setCarbonClass (percent) {
      switch (true) {
        case percent > .75: {
          return 'bad';
          break;
        }
        case percent > .50 && percent <= .75: {
          return 'okay';
          break;
        }
        case percent <= .50: {
          return 'good';
          break;
        }
        case percent = null: {
          return 'noData';
          break;
        }
      }
    }
    
    setGenerationClass (generation) {
      switch (true) {
        case generation < 0: {
          return 'bad';
          break;
        }
        case generation <= 500 && generation < 1750: {
          return 'okay';
          break;
        }
        case generation >= 1075: {
          return 'good';
          break;
        }
        case generation = null: {
          return 'noData';
          break;
        }
      }
    }
    
    setDemandClass (demand, generation) {
      switch (true) {
        case demand > generation: {
          return 'bad';
          break;
        }
        case demand >= generation && demand > 0: {
          return 'okay';
          break;
        }
        case demand <= generation: {
          return 'good';
          break;
        }
        case demand = null: {
          return 'noData';
          break;
        }
      }
    }
}