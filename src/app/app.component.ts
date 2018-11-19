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
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'eNudge';

  ngOnInit() {
  }

}
