import { Component, OnInit } from '@angular/core';
import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-unassigned-escort',
  templateUrl: './unassigned-escort.component.html',
  styleUrls: ['./unassigned-escort.component.scss']
})
export class UnassignedEscortComponent implements OnInit {

    escortListUnassigned : Escort[];

    constructor(
        private escortService : EscortService, 
        private firebase : AngularFireDatabase
    ) { }

    ngOnInit() {

        var esc = this.escortService.getEscortList();
        esc.snapshotChanges().subscribe(item => {

            this.escortListUnassigned = [];
            item.forEach(element => {

                var y = element.payload.toJSON();
                y["$key"] = element.key;
                var currentEscort = (y as Escort);
                if(currentEscort.status == 'Unassigned'){
                    this.escortListUnassigned.push(currentEscort);
                }             
            });
        });
    }
}
