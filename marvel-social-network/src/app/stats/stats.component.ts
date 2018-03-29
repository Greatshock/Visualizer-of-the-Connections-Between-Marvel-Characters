import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {genderDistribution, GenderRow} from "./data/data";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  constructor() { }

  displayedColumns = ['gender', 'amount', 'percentage'];
  dataSource = new MatTableDataSource(GENDERS_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

const GENDERS_DATA: GenderRow[] = genderDistribution;
