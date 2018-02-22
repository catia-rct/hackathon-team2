import {Component, OnDestroy} from '@angular/core';
import {GoToDetailsComponent} from './go-to-details/go-to-details.component';
import {StatusBarComponent} from './status-bar/status-bar.component';
import {SmartTableHelperService} from './services/smart-table-helper.service';
import {Subscription} from 'rxjs/Subscription';
import {Shipment} from './shipment.model';
import {ShipmentListingService} from '../../../shared/services/shipment-listing.service';

@Component({
  selector: 'shipment-listing',
  templateUrl: './shipment-listing.component.html'
})
export class ShipmentListingComponent implements OnDestroy {

  settings = {
    actions: {
      edit: false,
      delete: false,
      add: false,
    },
    columns: {
     
      shipment_name: {
        title: 'Shipment',
        type: 'string',
      },
      from: {
        title: 'From',
        type: 'string',
      },
      to: {
        title: 'To',
        type: 'string',
      },
      status: {
        width: '150px',
        sort: false,
        filter: false,
        title: 'Status',
        type: 'custom',
        renderComponent: StatusBarComponent,
      },
      goToDetails: {
        filter: false,
        title: '',
        type: 'custom',
        renderComponent: GoToDetailsComponent,
      },
    },
  };

  public data = null;

  private shipmentDataSubscription: Subscription = null;
  selectedTruckId: string;

  constructor(private shipmentListingService: ShipmentListingService,
              private smartTableHelperService: SmartTableHelperService) {
    this.subscribeToShipmentdata();
  }

  /**
   * Makes a subscription to the shipmentData and handles the
   * comming data
   */
  private subscribeToShipmentdata(): void {
    this.shipmentListingService.getShipmentList().then(data => {
      this.data = data;
    }).catch(error => {
      console.error(error);
    });
  }

  /**
   * Unsubscribe of the subscription to prevent memory leaks.
   */
  public ngOnDestroy(): void {
    if (this.shipmentDataSubscription) {
      this.shipmentDataSubscription.unsubscribe();
    }
  }

}