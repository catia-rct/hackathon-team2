import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './reroute-info-modal.component.html',
  styleUrls: ['./reroute-info-modal.component.scss']
})
export class RerouteInfoModalComponent {

  constructor(private activeModal: NgbActiveModal) { }

  public closeModal(): void {
    this.activeModal.close();
  }
}