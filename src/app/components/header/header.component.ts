import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/api/http-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currency!: number;

  constructor(private httpRequestService:HttpRequestService) { }

  ngOnInit(): void {
    this.httpRequestService.getProfile().subscribe(result => {
      this.currency = result.data.currency;
    });
  }

}
