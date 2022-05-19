import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  lat = 37.775
  long = -122.434

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
