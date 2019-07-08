import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCatogeries(){
    return this.db.list('/categories',{
      query: {
        orderByChild: 'name'
      }
    });
  }
}
