import {Component, OnDestroy, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from '@angular/forms';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import { STATUSES } from '../../enums/statuses';
import { RerouteModalService } from './reroute-modal.service';
import { CalculationService } from '../../../../shared';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  templateUrl: './reroute-modal.component.html',
  styleUrls: ['./reroute-modal.component.scss', '../../status-icons.scss']
})
export class RerouteModalComponent implements OnInit {
  public shipmentUnitId: number;
  public delay: string;
  public modalData: any;
  public imageStatus: string;
  public optionsForm: FormGroup;
  public config: ToasterConfig;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private rerouteModalService: RerouteModalService,
    private calculationService: CalculationService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.imageStatus = STATUSES[this.modalData.status];

    this.optionsForm = this.formBuilder.group({
      flightNumber: [null],
      description: [null]
    });

    this.delay = this.calculationService.generateTimeFormatByMinutes(this.modalData.delay);

  }

  public closeModal() {
    this.activeModal.close();
  }

  public submit(form) {
    let mockData: any = {
      "NewTransportId": "721",
      "NextStage": "Flight ",
      "ETD": "",
      "ETA": "",
      "Origin": "LUX",
      "Destination": "HSV",
      "ReroutingDescription": "",
      "ModeOfTransport": "Plane",
      "Status": "open"
    };

    mockData.NextStage = mockData.NextStage + form.value.flightNumber;
    mockData.ReroutingDescription = form.value.description;
    mockData.ETA = this.modalData.ETA;

    let etd: any = Math.round(Date.parse(this.modalData.ETD) / 1000);
    //ToDo Hardcoded 2 hours more
    etd = etd + (parseInt(this.modalData.delay) * 60) + 7200;
    const date = new Date(etd);

    let day: any = date.getDate();
    let month: any = date.getMonth() + 1;
    let year: any = date.getFullYear();
    let hour: any = date.getHours();
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    if (hour < 10) {
      hour = '0' + hour;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    etd = year + '/' + month + '/' + day + ' ' + hour + ':' + minutes + ' ' + seconds;
    mockData.ETD = etd;

    this.rerouteModalService.update(mockData, this.modalData.shipmentId, this.modalData.routerStage).subscribe((data) => {
      this.closeModal();
      this.showToast('success', 'Saved changes', 'Your shipment was rerouted.');
    }, err => {
      this.closeModal();
      this.showToast('error', 'Error', 'Something went wrong! Please try again later.');
    });
  }


  private showToast(type: string, title: string, body: string) {

    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 5000,
      newestOnTop: false,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'slideUp',
      limit: 6,
    });

    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };

    this.toasterService.popAsync(toast);
  }
}