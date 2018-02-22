import { Component, OnInit } from '@angular/core';
import { ShipmentHttpService } from '../../../shared/services/shipment-http.service';
import { Input } from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  truckId: string;

  constructor(private shipmentHttpService: ShipmentHttpService) { }

  ngOnInit() {
    this.shipmentHttpService.get('','').toArray().subscribe(
        results => {
         console.log();
      });
    }
}
