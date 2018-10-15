
import { Component, OnInit } from '@angular/core';

@Component({

selector: 'navigation',

templateUrl: './navigation.component.html',

styleUrls: ['./navigation.component.css']

})

export class NavigationComponent implements OnInit {

constructor() { }



ngOnInit() {

}

icon="menu"

iconcount =0;

appName = "IRC App";

changeIcon=()=>{

this.iconcount++;

console.log(this.iconcount);

if(this.iconcount %2 == 0){

this.icon = "menu"

}else{

this.icon = "close"

}

}

}

