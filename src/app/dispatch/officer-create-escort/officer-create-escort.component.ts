import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EscortService } from '../../services/escort.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DePaulData } from '../../data/depaul.data';


@Component({
  selector: 'app-officer-create-escort',
  templateUrl: './officer-create-escort.component.html',
})
export class OfficerCreateEscortComponent implements OnInit {

    public drivers: Array<string>; 
    public locations: Array<string>; 
    public passengers: Array<string>; 

    constructor(
        public escortService : EscortService, 
        private firebase : AngularFireDatabase,
    ) {
        this.drivers = DePaulData.drivers;
        this.locations = DePaulData.locations;
        this.passengers = DePaulData.passengers;
    }

    ngOnInit() { }

    onSubmit(escortForm: NgForm){
	   if(escortForm.value.$key == null)
	       this.escortService.newEscort(escortForm.value);
	   else 
	       this.escortService.updateEscort(escortForm.value.$key, escortForm.value);
           this.resetForm(escortForm);
    }

    resetForm(escortForm? : NgForm){
    	if(escortForm != null)
        	escortForm.reset();
	   else {
    	   this.escortService.selectedEscort = {
               $key : null,
        	   driver : '',
        	   pickup : '',
        	   dropoff : '',
        	   passengers : '',
		       no_show : false,
		       status : '',
		       created : '',
    	   };
	   }
    }
}
