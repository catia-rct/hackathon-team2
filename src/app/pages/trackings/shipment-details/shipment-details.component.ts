import {Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import {MilestoneViewModes} from '../../../shared';

@Component({
  selector: 'shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnChanges {

  public MILESTONE_VIEW_MODES = MilestoneViewModes;

  @Input() data: any = null;

  private currentViewMode: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    if (this.data) {
      this.currentViewMode = this.data.type;
      this.cdr.detectChanges();
    }
  }

  /**
   * Handler for the change tab emitted from the tab set
   * @param event
   */
  public changeTabHandler(event): void { }

}