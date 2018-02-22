import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StatusStyleMapping} from '../../../../shared';

@Component({
  templateUrl: './shipment-units-modal.component.html',
  styleUrls: ['./shipment-units-modal.component.scss']
})
export class ShipmentUnitsModalComponent implements OnInit {

  public STATUS_STYLE_MAPPING = StatusStyleMapping;

  public shipmentUnitId: string = '';
  public shipmentUnits: Array<any> = [];
  public status: string = '';

  constructor(private activeModal: NgbActiveModal) {
  }

  public ngOnInit(): void {
    /*
    * Fake logic for status, scince backend logic for this status
    * is not yet implemented
    */
    this.shipmentUnits.forEach((shipmentUnit, index) => {
      if (this.status === 'NotOk' && index === 1) {
        shipmentUnit.status = 'NotOk';
      } else {
        shipmentUnit.status = 'Completed';
      }
    })
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}