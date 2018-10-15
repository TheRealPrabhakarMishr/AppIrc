
import { Component, OnInit } from '@angular/core';



export interface Section {

name: string;

}

@Component({

selector: 'sidenav-list',

templateUrl: './sidenav-list.component.html',

styleUrls: ['./sidenav-list.component.css']

})

export class SidenavListComponent implements OnInit {

folders: Section[] = [

{

name: 'Photos'

},

{

name: 'Recipes'

},

{

name: 'Work'

}

];

notes: Section[] = [

{

name: 'Vacation Itinerary'

},

{

name: 'Kitchen Remodel'

}

];

constructor() { }



ngOnInit() {

}



}

