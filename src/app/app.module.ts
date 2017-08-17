import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';

import { WeatherService } from './shared/weather.service';
import { FirstLocationService } from './shared/first-location.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { weatherAppRouting } from './shared/weather-app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherAppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [WeatherService, FirstLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
