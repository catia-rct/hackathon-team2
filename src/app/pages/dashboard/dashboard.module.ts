import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { SharedModule } from '../../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ShipmentListingComponent } from './shipment-listing/shipment-listing.component';
import { GoToDetailsComponent } from './shipment-listing/go-to-details/go-to-details.component';
import { SmartTableHelperService } from './shipment-listing/services/smart-table-helper.service';
import { StatusBarComponent } from './shipment-listing/status-bar/status-bar.component';
import {ShipmentListingService} from '../../shared/services/shipment-listing.service';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    SharedModule,
    Ng2SmartTableModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    WorldMapComponent,
    StatisticsComponent,
    ShipmentListingComponent,
    GoToDetailsComponent,
    StatusBarComponent,
  ],
  providers: [
    SmartTableHelperService,
    ShipmentListingService
  ],
  entryComponents: [
    GoToDetailsComponent,
    StatusBarComponent,
  ],
})
export class DashboardModule { }
