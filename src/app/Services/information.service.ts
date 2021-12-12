import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor(private client: HttpClient) {}
  getCityInformation(cityName: string) {
    return this.client.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c826ce8eaac8ecc2617c0f620287cfe9`
    );
  }
}
