import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InformationService } from '../Services/information.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  tempreature = '';
  time = '';
  dayTime = false;
  night = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private information: InformationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      // TODO: cityNamevalue => default value
      let cityNameValue = 'Cairo';
      //
      //لو اليوزر بعتلى قيمه للسيتى نيم => هاخدها

      if (data.get('cityName') != null) {
        // بتقول للكود.. تعامل مع القيمه اللي راجعهمن الفانكشن اللى اسمها جيت ع انها سترنج> as string
        cityNameValue = data.get('cityName') as string;
      }
      this.information
        .getCityInformation(cityNameValue)
        .subscribe((serviceData: any) => {
          this.tempreature = serviceData.main.temp;
          this.time = serviceData.weather[0].icon;
          if (this.time.includes('d')) {
            this.dayTime = true;
          }
          if (this.time.includes('n')) {
            this.night = true;
          }
        });
    });
  }
}
