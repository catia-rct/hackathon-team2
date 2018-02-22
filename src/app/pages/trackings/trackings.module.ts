import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {TrackingsComponent} from './trackings.component';
import {TrackingsRoutingModule} from './trackings-routing.module';
import {ShipmentDetailsComponent} from './shipment-details/shipment-details.component';
import {ShipingDetailsTabComponent} from './shipment-details/components/shiping-details-tab/shiping-details-tab.component';
import {ShipmentUnitsTabComponent} from './shipment-details/components/shipment-units-tab/shipment-units-tab.component';
import {ShipmentUnitsModalComponent} from './modals/shipment-units-modal/shipment-units-modal.component';
import {SharedModule} from '../../shared/shared.module';
import {OptionsModalComponent} from './modals/options-modal/options-modal.component';
import { RerouteModalService } from './modals/reroute-modal/reroute-modal.service';
import { RerouteModalComponent } from './modals/reroute-modal/reroute-modal.component';
import { ToasterModule } from 'angular2-toaster';
import {MilestoneviewComponent} from './milestoneview/milestoneview.component';
import {SensorDataTabComponent} from './shipment-details/components/sensor-data-tab/sensor-data-tab.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { DatePipe } from '@angular/common';
import { RerouteInfoModalComponent } from './modals/reroute-info-modal/reroute-info-modal.component';
import { DetailsComponent } from './details/details.component';

const components = [
  TrackingsComponent,
  ShipmentDetailsComponent,
  ShipingDetailsTabComponent,
  ShipmentUnitsTabComponent,
  ShipmentUnitsModalComponent,
  OptionsModalComponent,
  MilestoneviewComponent,
  RerouteModalComponent,
  SensorDataTabComponent,
  RerouteInfoModalComponent
];

@NgModule({
  imports: [
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    TrackingsRoutingModule,
    ThemeModule,
    SharedModule,
    ToasterModule
  ],
  declarations: [
    ...components,
    DetailsComponent
  ],
  providers: [RerouteModalService, DatePipe],
  entryComponents: [
    ShipmentUnitsModalComponent,
    OptionsModalComponent,
    RerouteModalComponent,
    RerouteInfoModalComponent
  ],
})
export class TrackingsModule { }
