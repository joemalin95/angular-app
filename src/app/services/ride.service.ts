import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Ride } from '../data/ride';

@Injectable()
export class RideService {

    private basePath: string = '/something';

    rides: FirebaseListObservable<Ride[]> = null; //  list of objects
    ride: FirebaseObjectObservable<Ride> = null; //   single object

    constructor(private db: AngularFireDatabase) {
    }

    // Return a list of observable rides
    getRidesList(query={}): FirebaseListObservable<Ride[]> {
        this.rides = this.db.list(this.basePath, {
            query: query
        });
        return this.rides;
    }

    // Return a single observable ride
    getRide(key: string): FirebaseObjectObservable<Ride> {
        const ridePath =  `${this.basePath}/${key}`;
        this.ride = this.db.object(ridePath);
        return this.ride;
    }
    //
     // Default error handling for all actions
     private handleError(error) {
       console.log(error)
     }

    createRide(ride: Ride): void  {
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
