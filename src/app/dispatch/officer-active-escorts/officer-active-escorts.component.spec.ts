import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { OfficerActiveEscortsComponent } from './officer-active-escorts.component';
import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';

// Escort service stub

const escortServiceStub : Escort[] =
    [ { $key:  "LD94WCNdqb8j9Fe89Jm",
        driver: "L2",
        pickup: "Belden/Racine Hall",
        dropoff: "Cortelyou Commons",
        passengers: "2",
        no_show: false,
        status: "Completed",
        created: "1525735860971",
      }
    ]


describe('OfficerActiveEscortsComponent', () => {
    let component: OfficerActiveEscortsComponent;
    let fixture: ComponentFixture<OfficerActiveEscortsComponent>;
    let de: DebugElement;
    let service: EscortService;
    let spy: jasmine.Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OfficerActiveEscortsComponent ],
            providers: [
                EscortService,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfficerActiveEscortsComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        //service = de.injector.get(EscortService);
        //spy = spyOn(service, 'getEscortList').and.returnValue(of(escortServiceStub));

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
