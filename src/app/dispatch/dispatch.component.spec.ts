import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

import { OfficerActiveEscortsComponent } from './officer-active-escorts/officer-active-escorts.component';
import { OfficerCreateEscortComponent } from './officer-create-escort/officer-create-escort.component';
import { DispatchComponent } from './dispatch.component';

import { FormsModule }   from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { EscortService } from '../services/escort/escort.service';


describe('DispatchComponent', () => {
    let component: DispatchComponent;
    let fixture: ComponentFixture<DispatchComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                DispatchComponent,
                OfficerActiveEscortsComponent,
                OfficerCreateEscortComponent,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                FormsModule,
            ],
            providers: [
                EscortService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DispatchComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    // Test DOM elements
    it('should contain create escort element', () => {
        expect(de.query(By.css('app-officer-create-escort'))).toBeTruthy();
    });

    it('should contain active escorts element', () => {
        expect(de.query(By.css('app-officer-active-escorts'))).toBeTruthy();
    });
});
