import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';


import { ActiveEscortsComponent } from './active-escorts.component';

describe('ActiveEscortsComponent', () => {
    let component: ActiveEscortsComponent;
    let fixture: ComponentFixture<ActiveEscortsComponent>;
    let de: DebugElement;
    let de2: DebugElement;
    let escortKeyMock: string = "LD94WCNdqb8j9Fe89Jm";
    let activeEscortMock: Escort =
        { $key:  escortKeyMock,
          driver: "L2",
          pickup: "Belden/Racine Hall",
          dropoff: "Cortelyou Commons",
          passengers: "2",
          no_show: false,
          status: "Assigned",
          created: "1525735860971",
          finished: "1525738860971"
        }
    let completedEscortMock: Escort =
        { $key:  escortKeyMock,
          driver: "L2",
          pickup: "Belden/Racine Hall",
          dropoff: "Cortelyou Commons",
          passengers: "2",
          no_show: false,
          status: "Completed",
          created: "1525735860971",
          finished: "1525738860971"
        }
    let completedEscortListMock: Escort[] = [ completedEscortMock ];
    let activeEscortListMock: Escort[] = [ activeEscortMock ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ActiveEscortsComponent ],
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
        fixture = TestBed.createComponent(ActiveEscortsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show active escorts', () => {
        component.activeEscortList = activeEscortListMock;
        de = fixture.debugElement;
        fixture.detectChanges();

        expect(de.query(By.css('.active-escort-row'))).toBeTruthy();
    });
});
