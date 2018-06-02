import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFireDatabaseModule, AngularFireList, PathReference } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { OfficerActiveEscortsComponent } from './officer-active-escorts.component';
import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';



describe('OfficerActiveEscortsComponent', () => {
    let component: OfficerActiveEscortsComponent;
    let fixture: ComponentFixture<OfficerActiveEscortsComponent>;
    let de: DebugElement;
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
        }
    let escortListMock: Escort[] = [ escortMock ];
    let escortService: EscortService;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OfficerActiveEscortsComponent ],
            providers: [
                EscortService
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
        escortService = de.injector.get(EscortService);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle escorts', () => {
        component.escortList = escortListMock;
        expect(component.escortList[0]['no_show']).toBe(false);
        component.toggleCheckbox(escortKeyMock);
        expect(component.escortList[0]['no_show']).toBe(true);
    });

    it('should edit escort', () => {
        expect(escortService.selectedEscort).toEqual(new Escort());
        component.onEdit(escortMock);
        expect(escortService.selectedEscort).toEqual(escortMock);
    });

    it('should delete escort', () => {
        // Cannot test AngularFireList delete...
    });

    it('should complete escort', () => {
        // Cannot test AngularFireList update...
    });

});
