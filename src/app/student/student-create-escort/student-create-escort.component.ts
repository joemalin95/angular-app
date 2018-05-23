import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EscortService } from '../../services/escort.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DePaulData } from '../../data/depaul.data';

@Component({
  selector: 'app-student-create-escort',
  templateUrl: './student-create-escort.component.html',
  styleUrls: ['./student-create-escort.component.scss']
})
export class StudentCreateEscortComponent implements OnInit {

    public drivers: Array<string>;
    public locations: Array<string>;
    public passengers: Array<string>;

    constructor(
        public escortService : EscortService,
        private firebase : AngularFireDatabase
    ) {
        this.drivers = DePaulData.drivers;
        this.locations = DePaulData.locations;
        this.passengers = DePaulData.passengers;
    }

    ngOnInit() {
    }
  
    onSubmit(escortForm: NgForm){
        this.escortService.newEscort(escortForm.value);
    }
}
