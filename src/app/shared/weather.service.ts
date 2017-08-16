import {WEATHER_ITEMS} from './weather-data';
import {WeatherItem} from './weather-item';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http'; 
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    constructor(private _http: Http) {}
    api_key:string = "2d6855171f787bd1b8872c52564d1b11";

    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
        console.log(WEATHER_ITEMS);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.api_key}&units=metric`)
        .map(response => response.json())
        .catch(error =>{
            console.error(error);
            return Observable.throw(error.json())
        });
    }
}