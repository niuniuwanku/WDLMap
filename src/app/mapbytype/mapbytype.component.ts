import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Map} from "src/app/map/map";
@Component({
  selector: 'app-mapbytype',
  templateUrl: './mapbytype.component.html',
  styleUrls: ['./mapbytype.component.css']
})
export class MapbytypeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }

  getDatabydate() {
    let queryParams = new HttpParams();
    const url = 'http://127.0.0.1:5000/heatmapbydate';
    queryParams = queryParams.append("Crimetype","aafbadf")
    console.log("asdf")
    return this.http.get(url,{params:queryParams, 'responseType':"text"}).subscribe((data) => console.log(data))
    // return this.http.get("http://127.0.0.1:5000/heatmapbydate");


    // return this.http.get<UserInformation>(url,{params:queryParams});
  }


}
