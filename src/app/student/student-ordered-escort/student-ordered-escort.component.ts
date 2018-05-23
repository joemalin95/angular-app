import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EscortService } from '../../services/escort.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-student-ordered-escort',
  templateUrl: './student-ordered-escort.component.html',
  styleUrls: ['./student-ordered-escort.component.scss']
})
export class StudentOrderedEscortComponent implements OnInit {

  constructor(public escortService : EscortService, private firebase : AngularFireDatabase) { }

  ngOnInit() {
  }
  
  locations = [
    '1150 W. Fullerton',
    '990 W. Fullerton',
    '2400 W. Fullerton',
    'Arts and Letters',
    'ATC Annex',
    'ATC (Sullivan Athletic Center)',
    'Belden/Racine Hall',
    'Byrne',
    'Centennial Hall',
    'Clifton/Fullerton Hall',
    'Clifton Parking Garage',
    'College of Education',
    'Concert Hall',
    'Corcoran Hall',
    'Cortelyou Commons',
    'Courtside Apartments',
    'L',
    'Library',
    'McCabe Hall',
    'McGowan South',
    'Munroe Hall',
    'Quad',
    'Racine Properties',
    'Ray Meyer Fitness Center',
    'SAC', 
    'Sanctuary Townhomes',
    'Sanctuary Hall',
    'School of Music',
    'School of Music Annex',
    'Sheffield Parking Garage',
    'Sheffield Square Apartments',
    'St. Vincent\'s Church',
    'Student Center',
    'Theatre School',
    'University Hall',
    'Vincentian Residence',
    'Vincent and Louise House',
    'Wish Field'	 
    ];
    
    passengers = [
    '1',
    '2',
    '3',
    ];
    
    onSubmit(escortForm: NgForm){
        this.escortService.newEscort(escortForm.value);
    }

}
