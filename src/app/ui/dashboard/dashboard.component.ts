import { Component, OnInit } from '@angular/core';
//import { DataService } from '../services/data.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Leem } from '../carbon/leem';
import { Prices } from '../price/prices';
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
  
  today: number = Date.now();
  
  displayedColumns: string[] = ['Hourly Price', 'CO2 Tomorrow', 'CO2 Today'];
  
  pricesCol: AngularFirestoreCollection<Prices>;
  prices: Observable<Prices[]>;
  leemCol: AngularFirestoreCollection<Leem>;
  leem: Observable<Leem[]>;
  
  constructor(
    public db: FirestoreService) { }
    
  ngOnInit() {
  
    this.leem = this.db.col$('leem', leemRef => {
      return leemRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
    
    this.prices = this.db.col$('prices', pricesRef => {
      return pricesRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
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
    
    setCarbonClass (dayaheadCO2rate) {
      switch (true) {
        case dayaheadCO2rate >= 1920: {
          return 'bad';
          break;
        }
        case dayaheadCO2rate > 1650 && dayaheadCO2rate < 1920: {
          return 'okay';
          break;
        }
        case dayaheadCO2rate <= 1650: {
          return 'good';
          break;
        }
        case dayaheadCO2rate = null: {
          return 'noData';
          break;
        }
      }
    }
    
    
}