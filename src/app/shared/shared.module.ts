import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { GoogleMapComponent } from './google_map/google_map.component';
import { CurvedEdgesArcComponent } from './charts/curved-edges-arc/curved-edges-arc.component';
import { HttpService, ShipmentsService } from './index';
import { CommonModule } from '@angular/common';
import { CalculationService } from './services/calculation.service';
import { ShipmentHttpService } from './services/shipment-http.service';

// RoutingMapComponent,
const SHARED_COMPONENTS = [
  CurvedEdgesArcComponent,
  GoogleMapComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [HttpService, ShipmentsService, CalculationService, ShipmentHttpService],
})

export class SharedModule {}
