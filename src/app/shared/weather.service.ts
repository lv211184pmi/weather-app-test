import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'; 
import 'rxjs/Rx';

// import {WEATHER_ITEMS} from './weather-data';
import {WeatherItem} from './weather-item';

@Injectable()
export class WeatherService {
    myWeather: WeatherItem = new WeatherItem('Pustomyty', '30', 'http://sunny', 'sunny');
    location;
    constructor(private _http: Http) {}
    api_key:string = "2d6855171f787bd1b8872c52564d1b11";

    weatherNow(){
        return this.myWeather;
    }

    localWeatherData(lat: string, lon:string) {
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}&units=metric`)
            .map((response:Response) => response.json());
    }
    //     return new Promise ((res, rej) =>{
    //         navigator.geolocation.getCurrentPosition((pos) => {
    //             this.location = pos.coords;
    //             const lat = this.location.latitude;
    //             const lon = this.location.longitude;
    //             return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}&units=metric`)
    //                 .map((response: Response) => response.json())
    //                     .toPromise()
    //                         .then((data) => {
    //                             data => { 
    //                                 this.myWeather = new WeatherItem(data.name,
    //                                                                  data.main.temp,
    //                                                                  data.weather[0].icon,
    //                                                                  data.weather[0].description);
    //                                 res(this.myWeather);
    //                             }
    //                         })
    //         })
    //     })
    // }
}