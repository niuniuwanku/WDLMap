import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";
import { AdddataComponent } from './adddata/adddata.component';
import {MatMenuModule} from "@angular/material/menu";
import {DataService} from "./adddata/data.service";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { MapbytypeComponent } from './mapbytype/mapbytype.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AdddataComponent,
    MapbytypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIYL23c6kXpDdF5o8m5Y-OoAH5hH2nQUY',
      libraries: ['visualization']

    }),
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
