import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Escort } from '../../data/escort.data';

@Injectable()
export class EscortObservableService {

    private basePath: string = '/something';
    private escortList: FirebaseListObservable<Escort[]> = null; //  list of objects
    private escort: FirebaseObjectObservable<Escort> = null; //   single object

    constructor(private db: AngularFireDatabase) {
    }

    // Return a list of observable escorts
    getEscortObservableList(): FirebaseListObservable<Escort[]> {
        this.escortList = this.db.list(this.basePath);
        return this.escortList;
    }

    // Return a single observable escort
    getEscortObservable(key: string): FirebaseObjectObservable<Escort> {
        const escortPath =  `${this.basePath}/${key}`;
        this.escort = this.db.object(escortPath);
        return this.escort;
    }
}
