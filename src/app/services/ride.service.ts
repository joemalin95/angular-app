import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Escort } from '../data/escort.model';

@Injectable()
export class RideService {

    private basePath: string = '/something';

    rides: FirebaseListObservable<Escort[]> = null; //  list of objects
    ride: FirebaseObjectObservable<Escort> = null; //   single object

    constructor(private db: AngularFireDatabase) {
    }

    // Return a list of observable rides
    getRidesList(query={}): FirebaseListObservable<Escort[]> {
        this.rides = this.db.list(this.basePath, {
            query: query
        });
        return this.rides;
    }

    // Return a single observable ride
    getRide(key: string): FirebaseObjectObservable<Escort> {
        const ridePath =  `${this.basePath}/${key}`;
        this.ride = this.db.object(ridePath);
        return this.ride;
    }
    //
     // Default error handling for all actions
     private handleError(error) {
       console.log(error)
     }

    createRide(ride: Escort): void  {
       this.rides.push(ride);
     }


     // Update an existing ride
     updateRide(key: string, value: any): void {
       this.rides.update(key, value)
         .catch(error => this.handleError(error))
     }

     // Deletes a single ride
     deleteRide(key: string): void {
         this.rides.remove(key)
           .catch(error => this.handleError(error))
     }

     // Deletes the entire list of rides
     deleteAll(): void {
         this.rides.remove()
           .catch(error => this.handleError(error))
     }

}
