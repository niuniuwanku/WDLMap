import {HttpClient, HttpParams} from "@angular/common/http";
import {GeolocationService} from '@ng-web-apis/geolocation';
import {Observable} from "rxjs";
import {Injectable, OnInit} from "@angular/core";
@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit{

  constructor(private readonly geolocation$: GeolocationService,private http: HttpClient) { }
  lat!: number
  long!: number
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
    console.log(this.lat,this.long)
  }

  getsubcrime(Crime: string,subcrime: string) {
    this.Crimetype = Crime
    this.Subcrimetype = subcrime
  }
  senddata() {
    let queryParams = new HttpParams();
    const url = 'http://127.0.0.1:5000/location';
    queryParams = queryParams.append("lat",this.lat)
    queryParams = queryParams.append("long",this.long)
    queryParams = queryParams.append("Date",this.Date.toString())
    queryParams = queryParams.append("Crimetype",this.Crimetype)
    queryParams = queryParams.append("Subcrimetype",this.Subcrimetype)

    return this.http.get(url,{params:queryParams})
    // var request = new XMLHttpRequest();
    // request.open('post', ' http://127.0.0.1:5000/location',true);
    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // request.send(JSON.stringify({"lat" :this.lat,"long" : this.long,'time':this.Date,'Crimetype':this.Crimetype,'Subcrimetype':this.Subcrimetype}));
  }

  // let queryParams = new HttpParams();
  // const url = 'http://130.211.113.42:5000/heatmapbydate';
  // queryParams = queryParams.append("Crimetype",Crime)
  // return this.http.get<Map[]>(url,{params:queryParams})




  }
