import { Component, OnInit } from '@angular/core';
import { EscortService } from '../../services/escort.service';
import { Escort } from '../../data/escort.data';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-assigned-escort',
  templateUrl: './assigned-escort.component.html',
  styleUrls: ['./assigned-escort.component.scss']
})
export class AssignedEscortComponent implements OnInit {

    escortListActive : Escort[];

    constructor(
        private escortService : EscortService, 
        private firebase : AngularFireDatabase
    ) { }

    ngOnInit() {

        var esc = this.escortService.getData();
        esc.snapshotChanges().subscribe(item => {

            this.escortListActive = [];
            item.forEach(element => {

                var y = element.payload.toJSON();

                y["$key"] = element.key;

                var currentEscort = (y as Escort);

                if(currentEscort.status == 'Assigned'){
                    this.escortListActive.push(currentEscort);
                }
            });
        });
    }

}
