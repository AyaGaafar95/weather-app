import { Component, OnInit } from '@angular/core';
import { citiesList } from './cities';

@Component({
  selector: 'app-list-of-cities',
  templateUrl: './list-of-cities.component.html',
  styleUrls: ['./list-of-cities.component.css'],
})
export class ListOfCitiesComponent implements OnInit {
  cities: string[] = citiesList.sort();

  constructor() {}

  ngOnInit(): void {}
}
