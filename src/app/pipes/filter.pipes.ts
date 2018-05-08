import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from '../data/ride';

@Pipe({
  name: 'mySearch'
})

export class FilterPipe implements PipeTransform {
    transform(rides: Ride[], filterStatuses: string[]): Ride[] {

        // Return unfiltered rides if param was not supplied
        if (!rides || !filterStatuses) {
            return rides;
        }

        // Turn off case sensitivity
        filterStatuses.map( status => { status.toLowerCase() });

        // Remove ride if it has status included in params
        return rides.filter( ride => {
            return filterStatuses.indexOf(ride['status'].toLowerCase()) == -1;
        });
    }
}
