import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Map} from "./map";
import {BehaviorSubject, map, Observable} from "rxjs";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  Map: Map[] = [];
  // coords: google.maps.MVCArray;
  coords = new google.maps.MVCArray();
  private _testSubject = new BehaviorSubject<string>('old data');
  testObservable$: Observable<string> = this._testSubject.asObservable();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe((data:Map[]) => {this.Map = data},
      error => console.log(error),
      () => {
        for(let latlong of this.Map){
          // @ts-ignore
          // this.coords.push({"location" :new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)),"weight": Number(latlong.Count)})
          this.coords.push(new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)))
          // this.coords.push()
        }
        console.log(this.coords.getLength())
      }
    )
  }

  lat = 9.934739
  long = -84.087502

  // getDatabydate() {
  //   let queryParams = new HttpParams();
  //   const url = 'http://127.0.0.1:5000/heatmapbydate';
  //   queryParams = queryParams.append("Crimetype","aafbadf")
  //   console.log("asdf")
  //   return this.http.get(url,{params:queryParams, 'responseType':"text"}).subscribe(
  //
  //   )
  //   // return this.http.get("http://127.0.0.1:5000/heatmapbydate");
  //
  //
  //   // return this.http.get<UserInformation>(url,{params:queryParams});
  // }




  getData() {
    return this.http.get<Map[]>("http://127.0.0.1:5000/heatmap");
  }

  getdetailData(Crime: string) {
    let queryParams = new HttpParams();
    const url = 'http://127.0.0.1:5000/heatmapbydate';
    queryParams = queryParams.append("Crimetype",Crime)
    return this.http.get<Map[]>("http://127.0.0.1:5000/heatmapbydate",{params:queryParams}).subscribe(
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
}
