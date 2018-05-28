import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { EscortObservableService } from '../services/escort/escort-observable.service';
import { Escort } from '../data/escort.data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  providers: [EscortObservableService, AngularFireDatabase]
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

    // filter out assigned and unassigned escorts to only 
    // show completed escorts
    public filterStatuses: string[] = [ "assigned", "unassigned" ];
    public escortList: FirebaseListObservable<Escort[]>;
    public pageNum: number = 0;

    constructor(private escortObservableService: EscortObservableService) { }

    ngOnInit() {
        // Get escortList from escort observable service
        this.escortList = this.escortObservableService.getEscortObservableList();
    }
}
