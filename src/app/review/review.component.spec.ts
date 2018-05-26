import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { ReviewComponent } from './review.component';
import { RideService } from '../services/ride/ride.service';

import { FilterPipe } from '../pipes/filter.pipes';
import { ReversePipe} from '../pipes/reverse.pipes';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

import {NgxPaginationModule} from 'ngx-pagination';

const rideServiceStub =
    []

describe('ReviewComponent', () => {
    let component: ReviewComponent;
    let fixture: ComponentFixture<ReviewComponent>;
    let de: DebugElement;

    let service: RideService;
    let spy: jasmine.Spy;

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
            providers: [ RideService ]
        }) .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        service = de.injector.get(RideService);
        spy = spyOn(service, 'getRidesList').and.returnValue(of(rideServiceStub));

        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should call getContent one time and update the view', () => {
      
      expect(spy).toHaveBeenCalled();
      expect(spy.calls.all().length ).toEqual(1);
    
        //expect(de.query(By.css('.message-body')).nativeElement.innerText)
        //ex.toContain('warn');
    
    });

});
