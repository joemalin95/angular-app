import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';
import { DePaulData } from '../../data/depaul.data';
import { Building } from './building';
import { axisBottom, axisLeft, select, max, scaleBand, scaleLinear} from 'd3';

@Component({
  selector: 'app-pickup-graph',
  templateUrl: './pickup-graph.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PickupGraphComponent implements OnInit {

    private escortList = new ReplaySubject<Escort[]>();

    constructor(private escortService : EscortService, private element: ElementRef){} 

    ngOnInit(){
        this.getCompletedEscorts();
        this.generateBarGraph();
    }
        
    getCompletedEscorts(){

        var esc = this.escortService.getEscortList();

        // update escort list when changes occur
        esc.snapshotChanges().subscribe(item => {

            const newEscortList = [];

            // filter completed escorts from list 
            item.forEach(element => {

                var y = element.payload.toJSON();
                y["$key"] = element.key;

                var currentEscort = (y as Escort);

                if(currentEscort.status == 'Completed'){
				    newEscortList.push(currentEscort);
			     }
            });

            this.escortList.next(newEscortList);
	   });
    } 
        
    getEscortList() : Observable<Escort[]> {
        return this.escortList.asObservable();    
    }
     
     generateBarGraph(){

        var esc = this.getEscortList();
        esc.subscribe(item => {
                 
        var buildingTally : Building[] = [];
                
        for(let location of DePaulData.locations)
            buildingTally.push(new Building(location.label, 0));
                
        item.forEach(element => {    
            for(let b of buildingTally)
                        if(b.building == element.pickup)
                            b.pickupNum++;
                });
            this.makeD3BarGraph(buildingTally);
        });
	}

    makeD3BarGraph(buildingTally : Building[]){
    
        let margin = {top: 5, right: 20, bottom: 160, left:30};
        let width = 960 - margin.left - margin.right;
        let height = 600 - margin.top - margin.bottom;

        let svg = select(this.element.nativeElement).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', '#fff');
            
        let chart = svg.append("g")
            .attr('class', 'bar')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        let xDomain = buildingTally.map(d => d.building);
        let yDomain = [0, max(buildingTally, d=> d.pickupNum)];
        
        let x = scaleBand()
            .domain(xDomain)
            .rangeRound([0, width])
            .padding(0.2);

        let y = scaleLinear()
            .domain(yDomain)
            .range([height, 0]);

        svg.append("g")
            .attr('class', 'x axis')
            .attr('transform', `translate(${margin.left}, ${margin.top + height})`)
            .call(axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" );
        
        svg.append("g")
            .attr('class', 'y axis')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)
            .call(axisLeft(y));

        svg.selectAll("bar")
            .data(buildingTally)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return margin.left + x(d.building) ; })
            .attr("width", x.bandwidth)
            .attr("y", function(d) { return y(d.pickupNum); })
            .attr("height", function(d) { return height - y(d.pickupNum); });

    }
}
