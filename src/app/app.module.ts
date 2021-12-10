import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCitiesComponent } from './list-of-cities/list-of-cities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

@NgModule({
  declarations: [AppComponent, ListOfCitiesComponent, WeatherInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
