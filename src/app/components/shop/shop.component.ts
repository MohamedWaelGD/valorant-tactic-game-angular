import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categoryIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickCategories(number: number) {
    this.categoryIndex = number;
  }
}
