import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EscortService } from '../../services/escort/escort.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DePaulData } from '../../data/depaul.data';

interface Location {
    label : string;
    lat : number;
    lng : number;
};

@Component({
  selector: 'app-student-create-escort',
  templateUrl: './student-create-escort.component.html',
})
export class StudentCreateEscortComponent implements OnInit {

    public drivers: Array<string>;
    public locations: Array<object>;
    public passengers: Array<string>;

    constructor(
        public escortService : EscortService,
        private firebase : AngularFireDatabase,
    ) { }

    ngOnInit() {
        this.drivers = DePaulData.drivers;
        this.locations = DePaulData.locations;
        this.passengers = DePaulData.passengers;
    }

    dir = {
      origin: null,
      destination: null
    }
  
    @Output() myEvent = new EventEmitter<object>();

    onSubmit(escortForm: NgForm) {

        var pickup_id = escortForm.value.pickup;
        var dropoff_id = escortForm.value.dropoff;

        escortForm.value.pickup = this.getLocationName(pickup_id);
        escortForm.value.dropoff = this.getLocationName(dropoff_id);

        this.escortService.newEscort(escortForm.value);
    }

    updateOrigin(originId) {
        this.dir.origin = originId;
        this.dir.destination = null;
        this.myEvent.emit(this.dir)
    }

    updateDestination(destId) {
        this.dir.origin = null;
        this.dir.destination = destId;
        this.myEvent.emit(this.dir)
    }

    getLocationName(id : number) {
        return this.locations.filter((loc) => loc['id'] === id )[0]['label'];
    }
}
