import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { NavigationComponent } from "./navigation/navigation.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material";

import { SidenavListComponent } from "./sidenav-list/sidenav-list.component";

import { FooterComponent } from "./footer/footer.component";

import { SidenavContentComponent } from "./sidenav-content/sidenav-content.component";
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent,

    SidenavListComponent,

    FooterComponent,

    SidenavContentComponent,

    SignUpComponent
  ],

  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
