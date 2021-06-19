import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  eventData: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<any>('assets/events.json')
      .subscribe(data => (this.eventData = data));
  }
}
