import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

import { ReviewComponent } from './review.component';
import { EscortService } from '../services/escort/escort.service';

import { FilterPipe } from '../pipes/filter.pipes';
import { ReversePipe} from '../pipes/reverse.pipes';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

import {NgxPaginationModule} from 'ngx-pagination';

import { Component, OnInit } from '@angular/core';
import { Escort } from '../data/escort.data';


//////////////////////////////////////////
//                                      //
//             INITIALIZE               //
//                                      //
//////////////////////////////////////////

const escortServiceStub =
    [ { $key:  "LD94WCNdqb8j9Fe89Jm",
        driver: "L2",
        pickup: "Belden/Racine Hall",
        dropoff: "Cortelyou Commons",
        passengers: "2",
        no_show: false,
        status: "Completed",
        created: 1525735860971,
        finished: 1525738860971
      }
    ]

describe('ReviewComponent', () => {
    let component: ReviewComponent;
    let fixture: ComponentFixture<ReviewComponent>;
    let de: DebugElement;

    let service: EscortService;
    let spy: jasmine.Spy;

//////////////////////////////////////////
//                                      //
//                STUBS                 //
//                                      //
//////////////////////////////////////////

    
    // Escort service stub

    // Initialize
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                ReviewComponent,
                FilterPipe,
                ReversePipe,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                NgxPaginationModule,
            ],
            providers: [ 
                EscortService,
            ]
        }).compileComponents();
    }));


    // Create component and spy on getEscortList
    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement;

        service = de.injector.get(EscortService);
        spy = spyOn(service, 'getEscortList').and.returnValue(of(escortServiceStub));

        fixture.detectChanges();
    });

//////////////////////////////////////////
//                                      //
//                TESTS                 //
//                                      //
//////////////////////////////////////////

    // Test component creation
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test getEscortList call
    it('should call getEscortList', () => {
        expect(spy).toHaveBeenCalled();
    });

    // Test getEscortList call frequency
    it('should only call getEscortList once', () => {
        expect(spy.calls.all().length ).toEqual(1);
    });

    // Test DOM elements
    it('should populate the review table with a row', () => {
        expect(de.query(By.css('.review-row'))).toBeTruthy();
    });

});
