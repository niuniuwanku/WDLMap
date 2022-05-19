import {HttpClient} from "@angular/common/http";
import {GeolocationService} from '@ng-web-apis/geolocation';
import {Observable} from "rxjs";
import {Injectable, OnInit} from "@angular/core";
@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit{

  constructor(private readonly geolocation$: GeolocationService,private http: HttpClient) { }
  lat: number = 0
  long: number = 0
  Crimetype: string = ""
  Subcrimetype: string = ""
  Date = new Date()

  ngOnInit() {
  }


  getPosition() {
    navigator.geolocation.getCurrentPosition(resp => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
    })
  }

  getsubcrime(Crime: string,subcrime: string) {
    this.Crimetype = Crime
    this.Subcrimetype = subcrime
  }
  senddata() {
    var request = new XMLHttpRequest();
    request.open('post', ' http://127.0.0.1:5000/location',true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(JSON.stringify({"lat" :this.lat,"long" : this.long,'time':this.Date,'Crimetype':this.Crimetype,'Subcrimetype':this.Subcrimetype}));
  }




  }
