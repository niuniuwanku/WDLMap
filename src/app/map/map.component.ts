import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClient} from "@angular/common/http";
import {Map} from "./map";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  lat = 37.775
  long = -122.434

  getConfig() {
    return this.http.get<Map>("http://127.0.0.1:5000/heatmap");
  }
  // @ts-ignore
  private map: google.maps.Map = null;
  // @ts-ignore
  private heatmap: google.maps.visualization.HeatmapLayer = null;
  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;

    // here our in other method after you get the coords; but make sure map is loaded

    // const coords: google.maps.LatLng[] = []
    const coords: google.maps.LatLng[] = [new google.maps.LatLng(37.782551, -122.445368),]
    //   new google.maps.LatLng(37.782745, -122.444586),
    //   new google.maps.LatLng(37.782842, -122.443688),

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: coords
    });
  }
}
