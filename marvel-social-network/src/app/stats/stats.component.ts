import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from "@angular/material";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  genderDistribution,
  raceDistribution,
  citizenshipDistribution,
  orientationDistribution,
  density
} from "./data/data";
import * as nodes from '../../../../database/characters_for_nodes.json';
import * as links from '../../../../database/links_between_characters.json';
import {citizenships, races} from "../shared/filters-data/filters-data";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  gendersChartLabels:string[] = [];
  gendersChartData:number[] = [];
  racesChartLabels:string[] = [];
  racesChartData:number[] = [];
  citizenshipsChartLabels:string[] = [];
  citizenshipsChartData:number[] = [];
  orientationsChartLabels:string[] = [];
  orientationsChartData:number[] = [];
  nodes: any = [];
  links: any = [];
  isLinear = true;
  byFormGroup: FormGroup;
  parameterFormGroup: FormGroup;
  significanceFormGroup: FormGroup;
  categories = [
    'Citizenship',
    'Gender',
    'Race',
    'Orientation'
  ];
  parameters = {
    'Citizenship': [],
    'Gender': [
      'Male',
      'Female',
      'Genderfluid',
      'Agender',
      'N/A'
    ],
    'Race': [],
    'Orientation': [
      'Straight',
      'Gay',
      'Lesbian',
      'Pansexual',
      'N/A'
    ]
  };
  significanceLevels = [ .01, .03, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9 ];
  selectedCategory = '';
  selectedParameter = '';
  selectedSignificance = '';
  homophilyResult = {
    available: false,
    checkingWhatMessage: '',
    _2pqMessage: '',
    actual2pqMessage: '',
    matchedMessage: '',
    conclusion: ''
  };

  constructor(private _formBuilder: FormBuilder) {
    this.nodes = nodes;
    this.links = links;

    this.parameters.Citizenship = citizenships;
    this.parameters.Citizenship.shift();
    this.parameters.Race = races;
    this.parameters.Race.shift();

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

  ngOnInit() {
    this.byFormGroup = this._formBuilder.group({
      byCtrl: ['', Validators.required]
    });
    this.parameterFormGroup = this._formBuilder.group({
      parameterCtrl: ['', Validators.required]
    });
    this.significanceFormGroup = this._formBuilder.group({
      significanceCtrl: ['', Validators.required]
    });
  }

  checkHomophilyPressed() {
    this.checkHomophily(this.selectedCategory, this.selectedParameter, this.selectedSignificance);
    this.homophilyResult.available = true;
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

  checkHomophily(by, parameter, significance) {
    this.homophilyResult.checkingWhatMessage = `Checking homophily by ${parameter.toLowerCase()} ${by.toLowerCase()}`;
    by = by.toLowerCase();
    let allCount = this.nodes.length;

    // Find the first group of characters
    let group1 = [];
    for (let i = 0; i < allCount; i++) {
      if (nodes[i][by] === parameter) {
        group1.push(nodes[i].id);
      }
    }

    // Count characters which does not match => other group
    let othersCount = allCount - group1.length;
    this.homophilyResult.matchedMessage =
      `There are ${group1.length} characters matched by ${parameter} filter and ${othersCount} others`;

    // Calculate 2pq
    let _2pq = 2 * group1.length/allCount * othersCount/allCount;
    this.homophilyResult._2pqMessage = `2pq = ${_2pq.toFixed(4)}`;

    // Calculate actual cross-group links
    let crossGroupLinks = 0;
    for (let i = 0; i < this.links.length; i++) {
      // If link source is Russian and link target is not
      // or if links source is not Russian but link target is
      let link = links[i];
      if (((group1.indexOf(link.source) > -1) && (group1.indexOf(link.target) === -1)) ||
        ((group1.indexOf(link.target) > -1) && (group1.indexOf(link.source) === -1))) {
        crossGroupLinks++;
      }
    }
    let crossGroupLinksFraction = crossGroupLinks/this.links.length;
    this.homophilyResult.actual2pqMessage =
      `Actual cross-group links = ${crossGroupLinksFraction.toFixed(4)}`;

    // When the fraction of actual cross-group links is
    // significantly less than 2pq then there is evidence of homophily
    let difference = _2pq - crossGroupLinksFraction;
    if (difference > significance) {
      this.homophilyResult.conclusion = `With the level of significance of ${significance}, there is a homophily`;
    }

    this.homophilyResult.conclusion = `With the level of significance of ${significance}, there is no homophily`;
  }

}
