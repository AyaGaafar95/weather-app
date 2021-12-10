import { Component, OnInit } from '@angular/core';
import { citiesList } from './cities';
import { InformationService } from '../Services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-cities',
  templateUrl: './list-of-cities.component.html',
  styleUrls: ['./list-of-cities.component.css'],
})
export class ListOfCitiesComponent implements OnInit {
  // TODO: السيتىيز اراى اوف سترينج  <= cities: string[]
  cities: string[] = citiesList.sort();
  nameOfSelectedCity: string = '';
  constructor(
    private information: InformationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  selectCity(e: any) {
    this.nameOfSelectedCity = e.target.value;
  }
  goToCityInfo(nameOfTheCity: any) {
    this.router.navigateByUrl(`/info/${nameOfTheCity}`);
  }
}
