import {Component, Input, OnInit} from '@angular/core';
import {ShipmentListingService, StatusStyleMapping, MilestoneViewModes} from "../../../shared";
import {STATUSES} from "../enums/statuses";
import {ShipmentUnitsModalComponent} from "../modals/shipment-units-modal/shipment-units-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OptionsModalComponent} from '../modals/options-modal/options-modal.component';
import {ShipmentsService, CalculationService} from '../../../shared';
import {ActivatedRoute} from '@angular/router';
import {RerouteInfoModalComponent} from "../modals/reroute-info-modal/reroute-info-modal.component";

@Component({
  selector: 'milestoneview',
  templateUrl: './milestoneview.component.html',
  styleUrls: ['../status-icons.scss', './milestoneview.component.scss']
})
export class MilestoneviewComponent implements OnInit {

  @Input() routeStages: Array<any> = null;
  @Input() shipmentId: number;
  @Input() currentDataType: string = '';

  public STATUS_STYLE_MAPING = StatusStyleMapping;
  public STATUSES = STATUSES;
  public MILESTONE_VIEW_MODES = MilestoneViewModes;

  public shipmentUnits: Array<any> = null;

  constructor(private shipingListingService: ShipmentListingService,
              private modalService: NgbModal,
              private route: ActivatedRoute,
              private calculationService: CalculationService) {
  }

  ngOnInit(): void {
    this.getShipmentUnits();
  }

  /**
   * Makes a request for the shipment units to supply them to the
   * shipment units modal
   */
  private getShipmentUnits(): void {
    const shipmentId = this.route.snapshot.params['packId'];
    this.shipingListingService.getShipmentUnits(shipmentId).then(shipmentUnits => {
      this.shipmentUnits = shipmentUnits;
    })
  }

  public openRerouteEventInfoPopup(routeStage) {
    const activeModal = this.modalService.open(RerouteInfoModalComponent, {size: 'lg', container: 'trackings'});
    activeModal.componentInstance.modalHeader = 'Reroute info';
    activeModal.componentInstance.data = routeStage;
  }

  shouldShowOptionsButton(routeStageIndex, milestoneIndex) {
    if (routeStageIndex === 0 && milestoneIndex === 0) {
      return;
    }
    let previousMilestone;
    try {
      const previousMilestoneIndex = milestoneIndex === 0 ? this.routeStages[routeStageIndex - 1].length - 1 : milestoneIndex - 1;
      const actualRouteStageIndex = milestoneIndex === 0 ? routeStageIndex - 1 : routeStageIndex;
      previousMilestone = this.routeStages[actualRouteStageIndex].milestones[previousMilestoneIndex];
    } catch (error) {
      return false;
    }

    return !!this.getDelayEvents(previousMilestone).length;
  }

  /**
   * Opens the modal onclick of the eye icon
   */
  public openShipmentUnitsModal(status): void {
    const activeModal = this.modalService.open(ShipmentUnitsModalComponent, {size: 'sm', container: 'trackings'});
    activeModal.componentInstance.modalHeader = 'Connection Airport';
    activeModal.componentInstance.shipmentUnits = this.shipmentUnits;

    // Below row needed for implementing status for shipment units modal popup
    activeModal.componentInstance.status = status;

    activeModal.componentInstance.shipmentUnitId = this.route.snapshot.params['packId'];
  }

  public openOptionsModal(id: number, routerStageObj: any, milestoneObj: any) {
    const currentRouterStage = routerStageObj;
    const delayEvents = this.getDelayEvents(currentRouterStage);
    let delay = 0;

    for (let i = 0; i < delayEvents.length; i++) {
      delay = delay + parseInt(delayEvents[i]['DelayDuration']);
    }

    const activeModal = this.modalService.open(OptionsModalComponent, {size: 'lg', container: 'trackings'});
    activeModal.componentInstance.shipmentUnitId = id;
    activeModal.componentInstance.modalData = {
      name: currentRouterStage.Name,
      estimate: milestoneObj.dateEstimated,
      delay: delay,
      location: milestoneObj.location.Name,
      status: 'AIRPORT_OK',
      ETA: routerStageObj.ETA,
      ETD: routerStageObj.ETD,
      shipmentId: this.shipmentId,
      routerStage: routerStageObj._id,
      flightsList: [
        {
          id: 'CV8623',
          name: 'CV8623'
        },
        {
          id: 'CV8607',
          name: 'CV8607'
        },
        {
          id: 'CV8604',
          name: 'CV8604'
        },
        {
          id: 'CV8626',
          name: 'CV8626'
        }
      ]
    };
  }

  /**
   * Get delay data
   * @param embededList
   * @returns {Array}
   */
  private getDelayEvents(embededList) {
    if (!embededList || !embededList.embedded) {
      return [];
    }
    embededList = embededList.embedded;
    let eventList = [];
    let delay = [];

    for (let key in embededList) {
      if (embededList[key]['parentRelnName'] === 'eventHistory') {
        eventList = embededList[key]['entities'];
        break;
      }
    }

    for (let j = 0; j < eventList.length; j++) {
      if (eventList[j]['type'] === 'DelayEvent') {
        delay.push(eventList[j]);
      }
    }

    return delay;
  }
}