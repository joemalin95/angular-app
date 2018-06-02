import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';
import { DailyEscort } from './daily-escort';
import { DePaulData } from '../../data/depaul.data';
import { axisBottom, axisLeft, select, max, scaleBand, scaleLinear } from 'd3';

@Component({
  selector: 'app-escorts-daily-graph',
  templateUrl: './escorts-daily-graph.component.html',
  styleUrls: ['./escorts-daily-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EscortsDailyGraphComponent implements OnInit {

  private escortList = new ReplaySubject<Escort[]>();

    constructor(private escortService : EscortService, private element: ElementRef){} 

    ngOnInit(){
        this.getData();
        this.generateBarGraph();
    }
        
    getData(){
        var esc = this.escortService.getEscortList();
        esc.snapshotChanges().subscribe(item => {
            const newEscortList = [];
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
                 
            var dayTally = new Map<string, number>();
            var dayArray : DailyEscort[] = [];
            
            item.forEach(element => {  
            
                var elementDate = new Date(element.created).toDateString();
                
                if(!dayTally.has(elementDate))
                    dayTally.set(elementDate, 1);
                else {
                    var tempCount = dayTally.get(elementDate) + 1;
                    dayTally.set(elementDate, tempCount);
                }
                
                dayTally.forEach(function(value, key) {
                    dayArray.push(new DailyEscort(key, value));
                });
                
            });
            this.makeD3BarGraph(dayArray);
	   });
    }

    makeD3BarGraph(dayArray : DailyEscort[]){

        let margin = {top: 5, right: 20, bottom: 160, left:30};
        let width = 960 - margin.left - margin.right;
        let height = 600 - margin.top - margin.bottom;

        let svg = select(this.element.nativeElement).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', '#efefef');
            
        let chart = svg.append("g")
            .attr('class', 'bar')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        let xDomain = dayArray.map(d => d.date);
        let yDomain = [0, max(dayArray, d=> d.numEscorts)];
        
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
            .data(dayArray)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return margin.left + x(d.date) ; })
            .attr("width", x.bandwidth)
            .attr("y", function(d) { return y(d.numEscorts); })
            .attr("height", function(d) { return height - y(d.numEscorts); });
            
    }
    
}
