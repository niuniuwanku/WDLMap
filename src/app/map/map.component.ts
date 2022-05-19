import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClient} from "@angular/common/http";
import {Map} from "./map";
import {map} from "rxjs";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  Map: Map[] = [];
  latnew: number = 0;
  longnew: number = 0;
  public coords: google.maps.LatLng[] = []


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getConfig().subscribe((data:Map[]) => {this.Map = data},
      error => console.log(error),
      () => {
        for(let latlong of this.Map){
          this.coords.push(new google.maps.LatLng(Number(latlong.lat),Number(latlong.long)))
        }
        console.log(this.coords)
      }
    )
  }

  lat = 9.934739
  long = -84.087502

  getConfig() {
    return this.http.get<Map[]>("http://127.0.0.1:5000/heatmap");
  }


  // @ts-ignore
  private map: google.maps.Map = null;
  // @ts-ignore
  private heatmap: google.maps.visualization.HeatmapLayer = null;
  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: this.coords
    });
  }
}
