import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carbons } from '../carbon/carbons';
// import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.scss']
})

export class NudgeComponent implements OnInit {

  carbonsCol: AngularFirestoreCollection<Carbons>;
  carbons: Observable<Carbons[]>;

  constructor(private afs: AngularFirestore) { 
    this.carbonsCol = this.afs.collection('carbons', carbonsRef => {
      return carbonsRef
              .orderBy('validUntil', 'desc')
              .limit(1)
        });
    this.carbons = this.carbonsCol.valueChanges();
  }
  
  carbonThreshold: number = 0.75;
   
  //  let isEnvironmental = carbons.percent <= carbonThreshold;
  
  ngOnInit() {}

}

