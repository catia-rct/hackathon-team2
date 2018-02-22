import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared';
import {ShipmentsService, RouteStage, Location, LocationEvent, DelayEvent} from '../../shared';

import {forkJoin} from "rxjs/observable/forkJoin";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  providers: [ShipmentsService],
})
export class DashboardComponent implements OnInit {

  selectedTruckId: string;

  constructor(public http: HttpService, private shipmentsService: ShipmentsService) { }

  ngOnInit() {
    
  }

}
