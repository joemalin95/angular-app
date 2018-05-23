import { Component, OnInit } from '@angular/core';
import { EscortService } from '../services/escort.service';
import { Escort } from '../model/escort.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [EscortService]
})
export class StudentComponent implements OnInit {

  constructor(private escortService : EscortService, private firebase : AngularFireDatabase) { }

  ngOnInit() {
  }

}
