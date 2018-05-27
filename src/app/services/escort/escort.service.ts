import { Injectable, } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Escort } from '../../data/escort.data';

@Injectable()
export class EscortService {

    escortList : AngularFireList<any>;
    selectedEscort : Escort = new Escort();
    private basePath: string = '/something';


    constructor(private firebase : AngularFireDatabase) { }

    // Return a list of observable rides
    getEscortList(): AngularFireList<Escort[]> {
        this.escortList = this.firebase.list(this.basePath);
        return this.escortList;
    }

    newEscort(escort : Escort){

        if(escort.driver == 'No driver yet' || escort.driver == null){
            escort.status = "Unassigned";
            escort.driver = "No driver yet";
        }
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
                finished : null
            });
    }

    updateEscort($key : string, escort : Escort){

        var currentStatus : string = "";

        if(escort.driver != 'No driver yet')
            currentStatus = "Assigned";
        else
            currentStatus = "Unassigned";
            
        this.escortList.update($key, {
                driver : escort.driver,
                pickup : escort.pickup,
                dropoff : escort.dropoff,
                passengers : escort.passengers,
                status : currentStatus
        });
    }

    completeEscort($key : string, esc : Escort){
        this.escortList.update($key, {
            status : 'Completed',
            no_show : esc.no_show,
            finished : Date.now()

        });
    }

    deleteEscort($key : string){
        this.escortList.remove($key);
    }
}
