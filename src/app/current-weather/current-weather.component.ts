import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { WeatherService } from '../shared/weather.service';
import { WeatherItem } from '../shared/weather-item';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule]
})

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})

export class CurrentWeatherComponent implements OnInit {
  myWeather: WeatherItem;
  constructor(private _locationService: WeatherService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    this._locationService.otherCityWeather(form.value.location)
      .subscribe(
        (data) => {
          this.myWeather = new WeatherItem(data.name,
                                           data.main.temp,
                                           data.weather[0].icon,
                                           data.weather[0].description);
        })
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {myWeather: WeatherItem}) => {
        this.myWeather = data.myWeather;
      }
    )
  }
}
