import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'trackings/:packId/ShipmentUnits/:shUnitId/truck/:truckId',
        loadChildren: './trackings/trackings.module#TrackingsModule',
      },
      {
        path: 'trackings/:packId/ShipmentUnits/:shUnitId',
        loadChildren: './trackings/trackings.module#TrackingsModule',
      },
      {
        path: 'trackings/:packId',
        loadChildren: './trackings/trackings.module#TrackingsModule',
      },
      {
        path: 'trackings',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
