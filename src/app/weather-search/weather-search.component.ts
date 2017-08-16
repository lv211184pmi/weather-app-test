import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../shared/weather.service';
import { WeatherItem } from '../shared/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  onSubmit(form: FormGroup) {
    this._weatherService.searchWeatherData(form.value.location)
      .subscribe(
        data => {
          const WEATHER_ITEM = new WeatherItem(data.name, data.weather[0].description,
          data.main.temp);
          this._weatherService.addWeatherItem(WEATHER_ITEM);
        }
      );
  }

  ngOnInit() {
  }

}
