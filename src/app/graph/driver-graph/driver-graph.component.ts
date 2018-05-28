import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EscortService } from '../../services/escort/escort.service';
import { Escort } from '../../data/escort.data';
import { DePaulData } from '../../data/depaul.data';
import { Driver } from './driver';
import { axisBottom, axisLeft, select, max, scaleBand, scaleLinear } from 'd3';

@Component({
  selector: 'app-driver-graph',
  templateUrl: './driver-graph.component.html',
  styleUrls: ['./driver-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DriverGraphComponent implements OnInit {

    private escortList = new ReplaySubject<Escort[]>();

        constructor(private escortService : EscortService, private element: ElementRef){
        } 

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
                        console.log("escort-list -> ngOnInit() : currentEscort.status = " + currentEscort.status);
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

                var driverTally : Driver[] = [];
                
                for(let driver of DePaulData.drivers)
                    if(driver != 'No driver yet')
                        driverTally.push(new Driver(driver, 0));
                
                item.forEach(element => {    
                    for(let d of driverTally)
                        if(d.driver == element.driver)
                            d.numEscorts++;
                });
                this.makeD3BarGraph(driverTally);
            });
        }
        
        makeD3BarGraph(driverTally : Driver[]){
               
            let margin = {top: 5, right: 20, bottom: 45, left:30};
            let width = 960 - margin.left - margin.right;
            let height = 600 - margin.top - margin.bottom;

            let svg = select(this.element.nativeElement).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', '#efefef');
            
            let chart = svg.append("g")
            .attr('class', 'bar')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

            let xDomain = driverTally.map(d => d.driver);
            let yDomain = [0, max(driverTally, d=> d.numEscorts)];
           
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
                .call(axisBottom(x));
        
            svg.append("g")
                .attr('class', 'y axis')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)
                .call(axisLeft(y));

            svg.selectAll("bar")
                .data(driverTally)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return margin.left + x(d.driver) ; })
                .attr("width", x.bandwidth)
                .attr("y", function(d) { return y(d.numEscorts); })
                .attr("height", function(d) { return height - y(d.numEscorts); });
                
            svg.append("text")             
                .attr("transform",
                    "translate(" + (width/2) + " ," + 
                           (height + margin.top + 35) + ")")
                .style("text-anchor", "middle")
                .text("Driver");  
                
            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x",0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Number of escorts");      
        }
}
