import { Pipe, PipeTransform } from '@angular/core';
import { Escort } from '../data/escort.data';

@Pipe({
  name: 'mySearch'
})

export class FilterPipe implements PipeTransform {
    transform(rides: Escort[], filterStatuses: string[]): Escort[] {
         
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
