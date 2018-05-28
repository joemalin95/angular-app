import { Component, OnInit } from '@angular/core';
import { DePaulData } from '../../data/depaul.data';

interface Location {
    label : string;
    lat : number;
    lng : number;
};

interface LocationId {
  origin: number;
  destination: number;
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    public locations: Array<Location>;

    lat: number = 41.9256613;
    lng: number = -87.655412;
    zoom: number = 17;
    dir = {
      origin: null,
      destination: null
    };

    ngOnInit() {
        this.locations = DePaulData.locations;
    }

    setDirections(newDir : LocationId) {

        if (newDir.origin !== null) {
            this.setOrigin(newDir.origin);
        } 
            
        if (newDir.destination !== null) {
            this.setDestination(newDir.destination)
        }
    }

    setOrigin(id : number) {
        var originObj = this.getLocation(id);
        this.dir.origin = { lat: originObj.lat, lng: originObj.lng };
    }

    setDestination(id : number) {
        var DestObj = this.getLocation(id);
        this.dir.destination = { lat: DestObj.lat, lng: DestObj.lng };
    }

    getLocation(id : number) {
        return this.locations.filter((loc) => loc['id'] === id )[0];
    }
}
