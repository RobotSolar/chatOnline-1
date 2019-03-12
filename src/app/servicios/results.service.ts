import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface lotery {
  id: string;
  nameLotery: string;
  dateLotery: string;
  img: string;
  firstPrize: number;
  secondPrize: number;
  thirdPrize: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private db: AngularFirestore) { }

  getLotery() {
    return this.db.collection('LOTERIAS').snapshotChanges().pipe(map(lot => {
      return lot.map(a => {
        const data = a.payload.doc.data() as lotery;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }


  getResultsLotery( id_lotery:string){

    return this.db.collection('LOTERIAS', ref => ref.where('lotery_id', '==', id_lotery)).snapshotChanges().pipe(map(lot => {
      return lot.map(a => {
        const data = a.payload.doc.data() as lotery;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  
}
