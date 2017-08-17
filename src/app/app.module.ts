import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

import { WeatherService } from './shared/weather.service';
import { FirstLocationService } from './shared/first-location.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { weatherAppRouting } from './shared/weather-app.routing';
import { WeekWeatherComponent } from './week-weather/week-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    CurrentWeatherComponent,
    WeekWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherAppRouting
  ],
  providers: [WeatherService, FirstLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
