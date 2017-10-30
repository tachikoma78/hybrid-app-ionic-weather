import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey ='35a2d25628c16410';
  baseUrl = 'http://api.wunderground.com/api/';
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = this.baseUrl+this.apiKey+'/conditions/q';
  }

  // returns observable
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res.json());
  }

}
