import {Component, Input, OnChanges} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ShipmentUnitsModalComponent} from '../../../modals/shipment-units-modal/shipment-units-modal.component';
import {StatusStyleMapping, ShipmentListingService} from '../../../../../shared';

@Component({
  selector: 'shipment-units-tab',
  templateUrl: './shipment-units-tab.component.html',
  styleUrls: ['../../shipment-details.component.scss']
})
export class ShipmentUnitsTabComponent implements OnChanges {

  public STATUS_STYLE_MAPPING = StatusStyleMapping;

  @Input() data: any = null;

  public shipmentUnits: Array<any> = null;

  constructor(private modalService: NgbModal,
              private shipmentListingService: ShipmentListingService) {
  }

  public ngOnChanges() {
    this.getShipmentUnitsData();
  }

  /**
   * Gets the shipment data and handles the response
   */
  private getShipmentUnitsData(): void {
    if (this.data && this.data.id) {
      this.shipmentListingService.getShipmentUnits(this.data.id).then(response => {
        this.shipmentUnits = response;
      }).catch(error => {
        console.error(error);
      })
    }
  }
}