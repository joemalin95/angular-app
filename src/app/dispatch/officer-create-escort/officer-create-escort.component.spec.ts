import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';
import { DePaulData } from '../../data/depaul.data';
import { NgForm } from '@angular/forms';
import { Escort } from '../../data/escort.data';


import { OfficerCreateEscortComponent } from './officer-create-escort.component';

describe('OfficerCreateEscortComponent', () => {
    let component: OfficerCreateEscortComponent;
    let de: DebugElement;
    let fixture: ComponentFixture<OfficerCreateEscortComponent>;
    let depaulData: DePaulData
    let escortService: EscortService;
    let escortKeyMock: string = "LD94WCNdqb8j9Fe89Jm";
    let escortMock: Escort =
        { $key:  escortKeyMock,
          driver: "L2",
          pickup: "Belden/Racine Hall",
          dropoff: "Cortelyou Commons",
          passengers: "2",
          no_show: false,
          status: "Completed",
          created: "1525735860971",
          finished: "1525738860971"
        };
    let emptyEscortMock: Escort =
        { $key : null,
          driver : '',
          pickup : '',
          dropoff : '',
          passengers : '',
          no_show : false,
          status : '',
          created : '',
          finished : null,
        };


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OfficerCreateEscortComponent ],
            providers: [
                EscortService,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                FormsModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfficerCreateEscortComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        escortService = de.injector.get(EscortService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initalize drivers', () => {
        expect(component.drivers).toBe(DePaulData.drivers);
    });

    it('should initalize locations', () => {
        expect(component.locations).toBe(DePaulData.locations);
    });

    it('should initalize passengers', () => {
        expect(component.passengers).toBe(DePaulData.passengers);
    });

    it('should reset form', () => {
        escortService.selectedEscort = escortMock;
        expect(escortService.selectedEscort).toEqual(escortMock);
        component.resetForm();
        expect(escortService.selectedEscort).toEqual(emptyEscortMock);
    });

    it('should submit form', () => {
        // Cannot test AngularFireList push...
    });
});
