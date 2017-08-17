import {Injectable} from '@angular/core';
// import { Resolve } from '@angular/router'; 

import { WeatherService } from './weather.service';

@Injectable()
export class FirstLocationService {
    constructor(private weatherService: WeatherService) {}

    // resolve(){
    //     return this.weatherService.localWeatherData()
    // }
}