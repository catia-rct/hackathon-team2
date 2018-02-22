import { Injectable } from '@angular/core';

import { HttpService } from '../../../../shared';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RerouteModalService {

  constructor(private httpService: HttpService) { }

  public update(data: any, shipmentId: any, routerStages: any): Observable<any> {
    return this.httpService.post(`Shipments/${shipmentId}/RouteStages/${routerStages}/ReroutingEvents`, data);
  }

}
