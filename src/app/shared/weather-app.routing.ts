import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { WeekWeatherComponent } from '../week-weather/week-weather.component';

const WEATHER_ROUTER:Routes = [
    {path: '', component: CurrentWeatherComponent},
    {path: 'weekly', component: WeekWeatherComponent}
]

export const weatherAppRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)