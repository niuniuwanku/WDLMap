import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIYL23c6kXpDdF5o8m5Y-OoAH5hH2nQUY',
      libraries: ['visualization']

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
