import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EscortService } from './shared/escort.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
declare var $:any;
declare var google: any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    providers: [EscortService]
})

export class DashboardComponent implements OnInit{

    constructor(private escortService : EscortService, private firebase : AngularFireDatabase) { }

    drivers = [
	'No driver yet',
        'L50',
    	'L1',
    	'L2',
    	'L80',
    	'L1A',
    	'L1B',
    	'L1C',
    	'L2A',
    	'L2B',
    ];
    
    /*
        {value: 'L50', viewValue: 'L50'},
    	{value: 'L1', viewValue: 'L1'},
    	{value: 'L2', viewValue: 'L2'},
    	{value: 'L80', viewValue: 'L80'},
    	{value: 'L1A', viewValue: 'L1A'},
    	{value: 'L1B', viewValue: 'L1B'},
    	{value: 'L1C', viewValue: 'L1C'},
    	{value: 'L2A', viewValue: 'L2A'},
    	{value: 'L2B', viewValue: 'L2B'},
    */
    
    locations = [
    '1150 W. Fullerton',
    '990 W. Fullerton',
    '2400 W. Fullerton',
    'Arts and Letters',
    'ATC Annex',
    'ATC (Sullivan Athletic Center)',
    'Belden/Racine Hall',
    'Byrne',
    'Centennial Hall',
    'Clifton/Fullerton Hall',
    'Clifton Parking Garage',
    'College of Education',
    'Concert Hall',
    'Corcoran Hall',
    'Cortelyou Commons',
    'Courtside Apartments',
    'L',
    'Library',
    'McCabe Hall',
    'McGowan South',
    'Munroe Hall',
    'Quad',
    'Racine Properties',
    'Ray Meyer Fitness Center',
    'SAC', 
    'Sanctuary Townhomes',
    'Sanctuary Hall',
    'School of Music',
    'School of Music Annex',
    'Sheffield Parking Garage',
    'Sheffield Square Apartments',
    'St. Vincent\'s Church',
    'Student Center',
    'Theatre School',
    'University Hall',
    'Vincentian Residence',
    'Vincent and Louise House',
    'Wish Field'	 
    ];
    
    /*
    {value: '1150 W. Fullerton', viewValue: '1150 W. Fullerton'},
    {value: '990 W. Fullerton', viewValue: '990 W. Fullerton'},
    {value: '2400 W. Fullerton', viewValue: '2400 W. Fullerton'},
    {value: 'Arts and Letters', viewValue: 'Arts and Letters'},
    {value: 'ATC Annex', viewValue: 'ATC Annex'},
    {value: 'ATC (Sullivan Athletic Center)', viewValue: 'ATC (Sullivan Athletic Center)'},
    {value: 'Belden/Racine Hall', viewValue: 'Belden/Racine Hall'},
    {value: 'Byrne', viewValue: 'Byrne'},
    {value: 'Centennial Hall', viewValue: 'Centennial Hall'},
    {value: 'Clifton/Fullerton Hall', viewValue: 'Clifton/Fullerton Hall'},
    {value: 'Clifton Parking Garage', viewValue: 'Clifton Parking Garage'},
    {value: 'College of Education', viewValue: 'College of Education'},
    {value: 'Concert Hall', viewValue: 'Concert Hall'},
    {value: 'Corcoran Hall', viewValue: 'Corcoran Hall'},
    {value: 'Cortelyou Commons', viewValue: 'Cortelyou Commons'},
    {value: 'Courtside Apartments', viewValue: 'Courtside Apartments'},
    {value: 'L', viewValue: 'L'},
    {value: 'Library', viewValue: 'Library'},
    {value: 'McCabe Hall', viewValue: 'McCabe Hall'},
    {value: 'McGowan South', viewValue: 'McGowan South'},
    {value: 'Munroe Hall', viewValue: 'Munroe Hall'},
    {value: 'Quad', viewValue: 'Quad'},
    {value: 'Racine Properties', viewValue: 'Racine Properties'},
    {value: 'Ray Meyer Fitness Center', viewValue: 'Ray Meyer Fitness Center'},
    {value: 'SAC', viewValue: 'SAC'}, 
    {value: 'Sanctuary Townhomes', viewValue: 'Sanctuary Townhomes'},
    {value: 'Sanctuary Hall', viewValue: 'Sanctuary Hall'},
    {value: 'School of Music', viewValue: 'School of Music'},
    {value: 'School of Music Annex', viewValue: 'School of Music Annex'},
    {value: 'Sheffield Parking Garage', viewValue: 'Sheffield Parking Garage'},
    {value: 'Sheffield Square Apartments', viewValue: 'Sheffield Square Apartments'},
    {value: 'St. Vincent\'s Church', viewValue: 'St. Vincent\'s Church'},
    {value: 'Student Center', viewValue: 'Student Center'},
    {value: 'Theatre School', viewValue: 'Theatre School'},
    {value: 'University Hall', viewValue: 'University Hall'},
    {value: 'Vincentian Residence', viewValue: 'Vincentian Residence'},
    {value: 'Vincent and Louise House', viewValue: 'Vincent and Louise House'},
    {value: 'Wish Field', viewValue: 'Wish Field'}	 
    */
    
    passengers = [
    '1',
    '2',
    '3',
    ];
    
    /*
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    */

    onSubmit(escortForm: NgForm){
	console.log("onSubmit() where escortForm.value.$key = " + escortForm.value.$key);
	if(escortForm.value.$key == null)
	   this.escortService.newEscort(escortForm.value);
	else
	   this.escortService.updateEscort(escortForm.value.$key, escortForm.value);
    	this.resetForm(escortForm);
    }

    resetForm(escortForm? : NgForm){
    	if(escortForm != null)
        	escortForm.reset();
	else {
	console.log("escortForm was null!");

    	this.escortService.selectedEscort = {
        	$key : null,
        	driver : '',
        	pickup : '',
        	dropoff : '',
        	passengers : '',
		no_show : false,
		status : '',
		created : '',
    	};
	}
    }

    ngOnInit(){
        //this.escortService.escortList = this.firebase.list('something');
        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });


         var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
         var mapOptions = {
           zoom: 13,
           center: myLatlng,
           scrollwheel: false,
           styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        
         }
         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
         var marker = new google.maps.Marker({
             position: myLatlng,
             title:"Hello World!"
         });
        
         marker.setMap(map);
    }
}
