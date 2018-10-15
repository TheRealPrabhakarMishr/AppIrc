
import { NgModule } from "@angular/core";

import {

MatButtonModule,

MatCheckboxModule,

MatIconModule

} from "@angular/material";

import { MatToolbarModule } from "@angular/material/toolbar";

import { MatSidenavModule } from "@angular/material/sidenav";

import { MatDividerModule } from "@angular/material/divider";

import { MatListModule } from "@angular/material/list";

import { MatGridListModule } from "@angular/material/grid-list";

import { MatMenuModule } from "@angular/material/menu";



@NgModule({

imports: [

MatMenuModule,

MatGridListModule,

MatButtonModule,

MatCheckboxModule,

MatToolbarModule,

MatIconModule,

MatSidenavModule,

MatDividerModule,

MatListModule

],

exports: [

MatMenuModule,

MatGridListModule,

MatButtonModule,

MatCheckboxModule,

MatToolbarModule,

MatIconModule,

MatSidenavModule,

MatDividerModule,

MatListModule

]

})

export class MaterialModule {}

