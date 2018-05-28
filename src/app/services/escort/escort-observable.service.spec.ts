import { TestBed, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Escort } from '../../data/escort.data';


import { EscortObservableService } from './escort-observable.service';

describe('EscortObservableService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EscortObservableService
            ]
        });
    });
});
