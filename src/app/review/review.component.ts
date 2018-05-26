import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { RideService } from '../services/ride/ride.service';
import { Escort } from '../data/escort.data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  providers: [RideService, AngularFireDatabase]
})

export class ReviewComponent implements OnInit {


    public headerRow: string[];
    public filterStatuses: string[];
    public rides: FirebaseListObservable<Escort[]>;
    public pageNum: number = 0;

    constructor(private rideService: RideService) { }

    ngOnInit() {

        // Get rides from ride service
        this.rides = this.rideService.getRidesList({});

        // Set headers for data table
        this.headerRow = [ 
            'Driver', 
            'Pickup',
            'Dropoff',
            'Passengers',
            'Start Time',
            'Completed Time',
            'No Show',
        ];

        // filter out assigned and unassigned rides to only 
        // show completed rides
        this.filterStatuses = [ "assigned", "unassigned" ];
    }
}
