import { Component, OnInit } from '@angular/core';
import { EscortService } from '../../services/escort.service';
import { Escort } from '../../model/escort.model';

@Component({
  selector: 'app-escort-list',
  templateUrl: './escort-list.component.html',
  styleUrls: ['./escort-list.component.scss']
})
export class EscortListComponent implements OnInit {

  escortList : Escort[];
  public checkVal: boolean;


  constructor(private escortService : EscortService) { }

  ngOnInit() {
	var esc = this.escortService.getData();
	esc.snapshotChanges().subscribe(item => {
		this.escortList = [];
		item.forEach(element => {
			var y = element.payload.toJSON();
			y["$key"] = element.key;
			var currentEscort = (y as Escort);
			if(currentEscort.status != 'Completed'){
                console.log("escort-list -> ngOnInit() : currentEscort.status = " + currentEscort.status);
				this.escortList.push(currentEscort);
			}
		});
	});

    this.checkVal = null;
  }

  toggleCheckbox(key : string) {
      this.escortList.map( escort => {
          if (escort.$key == key) {
              escort.no_show = !escort.no_show;
          }
      });
  }

  onEdit(esc : Escort){
    console.log("Called onEdit");
    this.escortService.selectedEscort = Object.assign({}, esc);
  }
  
  onDelete(key : string){
    if(confirm('Are you sure you want to delete this record?') == true){
        this.escortService.deleteEscort(key);
    }
  }

  onComplete(key : string, esc: Escort){
    if(esc.driver != 'No driver yet'){
	console.log("onComplete() where no_show is " + this.checkVal);
    	this.escortService.completeEscort(key, esc);
    } else {
	if(confirm('Are you sure you want to complete an escort that\'s unassigned?') == true)
		this.escortService.completeEscort(key, esc);
    }
    }
}
