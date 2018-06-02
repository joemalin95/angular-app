import { Component, OnInit } from '@angular/core';
import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-active-escorts',
  templateUrl: './active-escorts.component.html',
})
export class ActiveEscortsComponent implements OnInit {

    activeEscortList : Escort[];

    constructor(
        private escortService : EscortService, 
        private firebase : AngularFireDatabase
    ) { }

    ngOnInit() {
        var esc = this.escortService.getEscortList();
        esc.snapshotChanges().subscribe(item => {

            this.activeEscortList = [];
            item.forEach(element => {

                var y = element.payload.toJSON();
                y["$key"] = element.key;
                var currentEscort = (y as Escort);
                if(currentEscort.status == 'Unassigned' || currentEscort.status == 'Assigned') {
                    this.activeEscortList.push(currentEscort);
                }             
            });
        });
    }

}
