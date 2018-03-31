import { Component } from '@angular/core';
import { MatTableDataSource } from "@angular/material";
import {
  genderDistribution,
  raceDistribution,
  citizenshipDistribution,
  orientationDistribution,
  density
} from "./data/data";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  gendersChartLabels:string[] = [];
  gendersChartData:number[] = [];
  racesChartLabels:string[] = [];
  racesChartData:number[] = [];
  citizenshipsChartLabels:string[] = [];
  citizenshipsChartData:number[] = [];
  orientationsChartLabels:string[] = [];
  orientationsChartData:number[] = [];

  constructor() {
    for (let i = 0; i < genderDistribution.length; i++) {
      this.gendersChartData.push(genderDistribution[i].amount);
      this.gendersChartLabels.push(genderDistribution[i].gender);
    }
    for (let i = 0; i < raceDistribution.length; i++) {
      this.racesChartData.push(raceDistribution[i].amount);
      this.racesChartLabels.push(raceDistribution[i].race);
    }
    for (let i = 0; i < citizenshipDistribution.length; i++) {
      this.citizenshipsChartData.push(citizenshipDistribution[i].amount);
      this.citizenshipsChartLabels.push(citizenshipDistribution[i].citizenship);
    }
    for (let i = 0; i < orientationDistribution.length; i++) {
      this.orientationsChartData.push(orientationDistribution[i].amount);
      this.orientationsChartLabels.push(orientationDistribution[i].orientation);
    }
  }

  displayedGenderColumns = ['gender', 'amount', 'percentage'];
  gendersDataSource = new MatTableDataSource(genderDistribution);
  applyGenderFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.gendersDataSource.filter = filterValue;
  }

  displayedRaceColumns = ['race', 'amount', 'percentage'];
  racesDataSource = new MatTableDataSource(raceDistribution);
  applyRaceFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.racesDataSource.filter = filterValue;
  }

  displayedCitizenshipColumns = ['citizenship', 'amount', 'percentage'];
  citizenshipsDataSource = new MatTableDataSource(citizenshipDistribution);
  applyCitizenshipFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.citizenshipsDataSource.filter = filterValue;
  }

  displayedOrientationColumns = ['orientation', 'amount', 'percentage'];
  orientationsDataSource = new MatTableDataSource(orientationDistribution);
  applyOrientationFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.orientationsDataSource.filter = filterValue;
  }

  displayedDensityColumns = ['character', 'density'];
  densityDataSource = new MatTableDataSource(density);
  applyDensityFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.densityDataSource.filter = filterValue;
  }

}
