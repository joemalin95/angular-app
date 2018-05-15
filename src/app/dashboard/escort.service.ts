import { Injectable, } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Escort } from './escort.model';

@Injectable()
export class EscortService {

  escortList : AngularFireList<any>;
  selectedEscort : Escort = new Escort();

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
	this.escortList = this.firebase.list('something');
	return this.escortList;
  }
  
  newEscort(escort : Escort){
	console.log("Called newEscort() and status is: " + escort.status);
	if(escort.driver == 'No driver yet')
		escort.status = "Unassigned";
	else
		escort.status = "Assigned";



        this.escortList.push({
            driver : escort.driver,
            pickup : escort.pickup,
            dropoff : escort.dropoff,
            passengers : escort.passengers,
            no_show : false,
            status : escort.status,
            created : Date.now(),
            //formatted_date : date
	});
    }

  updateEscort($key : string, escort : Escort){
	this.escortList.update($key, {
	    driver : escort.driver,
            pickup : escort.pickup,
            dropoff : escort.dropoff,
            passengers : escort.passengers
	});
  }
  
  completeEscort($key : string, esc : Escort){
	console.log("Was this escort a no show? " + esc.no_show);
	this.escortList.update($key, {
		status : 'Completed',
		no_show : esc.no_show
	
	});
  }

  deleteEscort($key : string){
        this.escortList.remove($key);
  }
}
