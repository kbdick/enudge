import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

export interface Carbons {
  ba: string;
  percent: number;
  rating: number;
  switch: number;
}

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.scss']
})

export class CarbonComponent implements OnInit {

  carbonsCol: AngularFirestoreCollection<Carbons>;
  carbons: Observable<Carbons[]>;

  constructor(private afs: AngularFirestore) { 
  // timestamp in milliseconds
  const currentTime = new Date().getTime();
  
  this.carbonsCol = this.afs.collection('carbons', ref => {
    return ref
            .orderBy('validUntil', 'desc')
            .limit(1)
      });
  this.carbons = this.carbonsCol.valueChanges();
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
  
  ngOnInit() {
  }
}

