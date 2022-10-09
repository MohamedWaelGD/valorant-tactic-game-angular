import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-quarter',
  templateUrl: './head-quarter.component.html',
  styleUrls: ['./head-quarter.component.css']
})
export class HeadQuarterComponent implements OnInit {

  categoryIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickCategories(number: number) {
    this.categoryIndex = number;
  }

}
