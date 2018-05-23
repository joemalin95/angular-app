import { Component, OnInit } from '@angular/core';
import { EscortService } from '../../services/escort.service';
import { Escort } from '../../model/escort.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-student-escorts-view',
  templateUrl: './student-escorts-view.component.html',
  styleUrls: ['./student-escorts-view.component.scss']
})
export class StudentEscortsViewComponent implements OnInit {

  escortListActive : Escort[];
  escortListUnassigned : Escort[];
  
  constructor(private escortService : EscortService, private firebase : AngularFireDatabase) { }

  ngOnInit() {
  
    var esc = this.escortService.getData();
	esc.snapshotChanges().subscribe(item => {
		this.escortListActive = [];
        this.escortListUnassigned = [];
		item.forEach(element => {
			var y = element.payload.toJSON();
			y["$key"] = element.key;
			var currentEscort = (y as Escort);
			if(currentEscort.status == 'Unassigned'){
                console.log("student-escorts -> currentEscort.status = " + currentEscort.status);
				this.escortListUnassigned.push(currentEscort);
			} else if(currentEscort.status == 'Assigned'){
                console.log("student-escorts -> currentEscort.status = " + currentEscort.status);
                this.escortListActive.push(currentEscort);
            }
		});
	});
  }

}
