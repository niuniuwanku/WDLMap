import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Map} from "./map";
import {BehaviorSubject, map, Observable, range} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DataService} from "../adddata/data.service";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  url: string = "http://127.0.0.1:5000/"
  // url: string = "http://130.211.113.42:5000/"
  markers: any = []
  Map: Map[] = [];
  // coords: google.maps.MVCArray;
  coords = new google.maps.MVCArray();
  campaignOne: FormGroup;
  lat = 9.934739
  long = -84.087502
  private startdate = new Date(2020, 12, 1);
  private enddate = new Date();

  constructor(private http: HttpClient, private dataservice:DataService ) {
    const today = new Date().getDate()
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(2020, 12, 1)),
      end: new FormControl(new Date(year, month, today)),
    })

  }

  ngOnInit(): void {
    this.getAllData()
  }


  getAllData() {
    let queryParams = new HttpParams();
    const url =  this.url+'dataall';
    queryParams = queryParams.append("from_date",this.startdate.getFullYear().toString().substring(2,4)+'-'+(this.startdate.getMonth()+1).toString()+'-'+this.startdate.getDate().toString())
    console.log(queryParams)
    queryParams = queryParams.append("to_date",this.enddate.getFullYear().toString().substring(2,4)+'-'+(this.enddate.getMonth()+1).toString()+'-'+this.enddate.getDate().toString())
    return this.http.get<Map[]>(url,{params:queryParams}).subscribe(
      (data:Map[]) =>{
        this.Map = data},
      error => console.log(error),
      () => {
        this.coords.clear()
        for (let latlong of this.Map) {
          // @ts-ignore
          this.coords.push({"location" :new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)),"weight": Number(latlong.Count)})
          // this.heatmap.setData(this.coords)
          //
          //
        }

      }

    );
    // return this.http.get<Map[]>("http://127.0.0.1:5000/heatmap").subscribe((data:Map[]) => {this.Map = data},
    //   error => console.log(error),
    //   () => {
    //     for(let latlong of this.Map){
    //       this.coords.push(new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)))
    //     }
    //     console.log(this.coords.getLength())
    //   }
    // )
  }
  getDatedate(Crime: string) {
    let queryParams = new HttpParams();

    const url = this.url+'date';
    queryParams = queryParams.append("from_date",this.startdate.getFullYear().toString().substring(2,4)+'-'+(this.startdate.getMonth()+1).toString()+'-'+this.startdate.getDate().toString())
    queryParams = queryParams.append("to_date",this.enddate.getFullYear().toString().substring(2,4)+'-'+(this.enddate.getMonth()+1).toString()+'-'+this.enddate.getDate().toString())
    queryParams = queryParams.append("Crimetype",Crime)

    console.log(this.http.get(url,{params:queryParams}))
    return this.http.get<Map[]>(url,{params:queryParams}).subscribe(
      (data:Map[]) =>{
        this.Map = []
        this.Map = data},
      error => console.log(error),
      () => {
        this.coords.clear()
        for (let latlong of this.Map) {
          // @ts-ignore
          this.coords.push({"location" :new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)),"weight": Number(latlong.Count)})
          this.heatmap.setData(this.coords)
          //
          //
        }

      }

    );
  }

  getdetailData(Crime: string) {
    let queryParams = new HttpParams();
    const url = this.url+'heatmapbydate';

    queryParams = queryParams.append("Crimetype",Crime)
    return this.http.get<Map[]>(url,{params:queryParams}).subscribe(
      (data:Map[]) =>{
        this.Map = []
        this.Map = data},
      error => console.log(error),
      () => {
        this.coords.clear()
        for (let latlong of this.Map) {
          // @ts-ignore
          this.coords.push({"location" :new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)),"weight": Number(latlong.Count)})
          this.heatmap.setData(this.coords)
        //
        //
        }

      }

    );
  }

//   this.getData().subscribe((data:Map[]) => {this.Map = data},
// error => console.log(error),
//   () => {
//     for(let latlong of this.Map){
//       // @ts-ignore
//       this.coords.push({"location" :new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)),"weight": Number(latlong.Count)})
//       // this.coords.push()
//     }
//     console.log(this.coords)
//   }
// )

  // @ts-ignore
  private map: google.maps.Map = null;
  // @ts-ignore
  private heatmap: google.maps.visualization.HeatmapLayer = null;

  onMapLoad(mapInstance: google.maps.Map) {
    // console.log("start map")
    this.map = mapInstance;
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: this.coords,
      maxIntensity:300,
      radius: 9.5,
      opacity:0.5,
      dissipating: true
    },

    );



  }


  addstart(type: string, event: MatDatepickerInputEvent<Date>) {
    try {
      // @ts-ignore
      this.startdate = event.value
      // this.startdate.push(event.value!.getFullYear())
      // this.startdate.push(event.value!.getMonth())
      // this.startdate.push(event.value!.getDate())
    }
    catch (e) {
      console.log(e)
    }
    console.log(this.startdate)
  }
  addend(type: string, event: MatDatepickerInputEvent<Date>) {
    try {
      // @ts-ignore
      this.enddate = event.value
      // this.enddate.push(event.value!.getFullYear().valueOf())
      // this.enddate.push(event.value!.getMonth().valueOf())
      // this.enddate.push(event.value!.getDate().valueOf())
    }
    catch (e) {
      console.log(e)
    }
    // console.log(this.enddate)
  }

  showmaker() {

    this.markers = this.dataservice.marker
    console.log(this.markers)
  }
}
