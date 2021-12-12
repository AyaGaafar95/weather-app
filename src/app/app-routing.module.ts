import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfCitiesComponent } from './list-of-cities/list-of-cities.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  { path: '', component: ListOfCitiesComponent },
  { path: 'info/:cityName', component: WeatherInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
