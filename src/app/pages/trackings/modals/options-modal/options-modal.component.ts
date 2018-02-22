import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import { STATUSES } from '../../enums/statuses';
import { RerouteModalComponent } from '../reroute-modal/reroute-modal.component';
import { CalculationService } from '../../../../shared';

@Component({
  templateUrl: './options-modal.component.html',
  styleUrls: ['./options-modal.component.scss', '../../status-icons.scss']
})
export class OptionsModalComponent implements OnInit {
  public shipmentUnitId: number;
  public delay: string;
  public modalData: any;
  public imageStatus: string;

  constructor(
    private activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private calculationService: CalculationService
  ) { }

  ngOnInit() {
    this.imageStatus = STATUSES[this.modalData.status];
    this.delay = this.calculationService.generateTimeFormatByMinutes(this.modalData.delay);
  }

  public closeModal() {
    this.activeModal.close();
  }

  public loadReroutePopup() {
    this.closeModal();
    const activeModal = this.modalService.open(RerouteModalComponent, {size: 'lg', container: 'trackings'});
    activeModal.componentInstance.shipmentUnitId = this.shipmentUnitId;
    activeModal.componentInstance.modalData = this.modalData;
  }

}