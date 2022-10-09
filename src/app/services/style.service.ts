import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  static GetGradientAndHeightShopItemStyle(gradient:Array<string>) {
    let gradientString = "";
    gradient.forEach(e => gradientString += "#"+ e + ",");
    gradientString = gradientString.slice(0, -1);
    let styles = {
      'background-image': 'linear-gradient(to bottom,' + gradientString + ")",
      'background-size': '2000px 2000px',
      'min-height': '300px'
    };
    return styles;
  }
}
