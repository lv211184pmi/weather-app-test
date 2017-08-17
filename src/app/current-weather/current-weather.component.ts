import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { WeatherItem } from '../shared/weather-item';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeather: WeatherItem;
  constructor(private _locationService: WeatherService) { }
  location;

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.location = pos.coords;
    //   const lat = this.location.latitude;
    //   const lon = this.location.longitude;
    //   this._locationService.localWeatherData(lat, lon)
    //     .subscribe(
    //       data => {
    //         this.currentWeather = new WeatherItem(data.name,
    //                                               data.main.temp,
    //                                               data.weather[0].icon,
    //                                               data.weather[0].description)
    //       }
    //     );
    // });
    this.currentWeather = this._locationService.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this._locationService.localWeatherData(lat, lon)
        .subscribe(
          (data) => {
            console.log(data);
          })
    })
  }
}
