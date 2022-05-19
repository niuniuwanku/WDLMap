import {Component, OnInit} from '@angular/core';
import {DataService} from "./adddata/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WDLsecond';

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    this.dataService.getPosition()
  }
}
