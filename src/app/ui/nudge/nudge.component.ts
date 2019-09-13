import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Leem } from '../carbon/leem';
import { FirestoreService } from '../../core/firestore.service';

@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.scss']
})

export class NudgeComponent implements OnInit {

  leemCol: AngularFirestoreCollection<Leem>;
  leem: Observable<Leem[]>;

  constructor(public db: FirestoreService, private afs: AngularFirestore) { }

  ngOnInit() {

    this.leem = this.db.col$('leem', carbonsRef => {
      return carbonsRef
              .orderBy('timestamp', 'desc')
              .limit(1)
        });
        
    let carbonThreshold: number = 1650;
  }
}

