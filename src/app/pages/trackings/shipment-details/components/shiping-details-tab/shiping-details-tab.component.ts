import {Component, Input} from '@angular/core';

@Component({
  selector: 'shiping-details-tab',
  templateUrl: './shiping-details-tab.component.html',
  styleUrls: ['../../shipment-details.component.scss']
})
export class ShipingDetailsTabComponent {

  @Input() data: any = null;

}