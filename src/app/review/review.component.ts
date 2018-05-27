import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { EscortService } from '../services/escort/escort.service';
import { Escort } from '../data/escort.data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  providers: [EscortService, AngularFireDatabase]
})

export class ReviewComponent implements OnInit {

    // Set headers for data table
    public headerRow: string[] = [
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
    public filterStatuses: string[] = [ "assigned", "unassigned" ];
    public rides: AngularFireList<any>;
    public pageNum: number = 0;

    constructor(private rideService: EscortService) { }

    ngOnInit() {
        // Get rides from ride service
        this.rides = this.rideService.getEscortList();
    }
}
