import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { FirstLocationService } from './first-location.service';

const WEATHER_ROUTER:Routes = [
    {path: '', component: CurrentWeatherComponent, resolve: {myWeather:FirstLocationService}}
]

export const weatherAppRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)