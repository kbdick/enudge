import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carbons } from '../carbon/carbons';
import { FirestoreService } from '../../core/firestore.service';

@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.scss']
})

export class NudgeComponent implements OnInit {

  carbonsCol: AngularFirestoreCollection<Carbons>;
  carbons: Observable<Carbons[]>;

  constructor(public db: FirestoreService, private afs: AngularFirestore) { }

  ngOnInit() {

    this.carbons = this.db.col$('carbons', carbonsRef => {
      return carbonsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
        
    let carbonThreshold: number = 0.75;
  }
}

