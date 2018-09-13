import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Prices {
  price: number;
}

export interface Carbons {
  carbon: number;
}

export interface Solars {
  generation: number;
}

export interface Uses {
  consumption: number;
}

@Component({
  selector: 'app-dashboard',
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

  constructor(private afs: AngularFirestore) { 
  this.pricesCol = this.afs.collection('prices');
  this.prices = this.pricesCol.valueChanges();
  this.carbonsCol = this.afs.collection('carbons');
  this.carbons = this.carbonsCol.valueChanges();
  this.solarsCol = this.afs.collection('solars');
  this.solars = this.solarsCol.valueChanges();
  this.usesCol = this.afs.collection('uses');
  this.uses = this.usesCol.valueChanges();
  }
  
  ngOnInit() {
  }

}
