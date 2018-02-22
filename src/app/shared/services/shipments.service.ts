import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpService} from './http.service';
import 'rxjs/add/operator/mergeMap';

//import * as mockData from './input';
import {forkJoin} from "rxjs/observable/forkJoin";


const SHIPMENTS = 'Shipments';

const ROUTE_STAGES = 'RouteStages';

const LOCATIONS = 'Locations';

const SHIPMENT_UNITS = 'ShipmentUnits';

const LOCATION_EVENTS = 'LocationEvents';

const DELAY_EVENTS = 'DelayEvents';

/* Model classes */

export class LocationEvent {
  constructor(public _id: string,
              public type: string,
              public Name: string,
              public dateCreated: string,
              public description: string,
              public geo_longitude: number,
              public geo_latitude: number,
              public geo_precision: number,
              public path: string)  {

  }

}

export class LocationEventHack {
  constructor(public latitude: string,
              public longitude: string,
              public timestamp: string,
              public eventId: string,
              public truckId: string,
              public conditions: Condition[]){

  }
}

export class Condition {
  constructor(public internalHumidity:string,
              public tyrePressure:string,
              public internalTemp:string,
              public externalLight: string,
              public internalAccel: string,
              public externalTemp: string){
                
              }
}

export class DelayEvent {
  constructor(public _id: string,
              public type: string,
              public Name: string,
              public dateCreated: string,
              public description: string,
              public path: string,
              public delayReason: string,
              public delayDescription: string,
              public delayDuration: number)  {

  }

}

export class Location {
  constructor(public id: string,
              public Name: string,
              public latitude: number,
              public longitude: number) {
  }
}

export class RouteStage {
  public to: Location;
  public from: Location;

  constructor(
    public id: string,
    public toLocationID: string,
    public fromLocationID: string,
    public ETD: string,
    public ETA: string,
    public ATD: string,
    public ATA: string,
    public status: string,
    public sequenceNumber: number,
    public risk: string,
    public modeOfTransport: string,
    public associations: any [],
    public embedded: any [],
  ) {
  }

  
}

@Injectable()
export class ShipmentsService {


  constructor(private httpService: HttpService) {
  }

  /* REST calls */

  /**
   * Calls LogisticsTestbedV12/Shipments/{id}/RouteStages
   * @param {string} id
   * @returns {Observable<RouteStage[]>}
   */
  private getRouteStagesForShipment(id: string): Observable<RouteStage[]> {

    let urlExtension = SHIPMENTS + '/' + id + '/' + ROUTE_STAGES;

    return this.httpService.get(urlExtension).map(
      res => {
        return <RouteStage []> res;
      },
      msg => {
        return msg.status;
      }
    );
  }

  /** Calls LogisticsTestbedV12/Locations/{id}
   *
   * @param {string} id of location
   * @returns {Observable<Location>} Relevant location object
   */
  public getLocation(id: string): Observable<Location> {
    let urlExtension = LOCATIONS + '/' + id;

    return this.httpService.get(urlExtension).map(
      res => {
        return <Location> res;
      },
      msg => {
        return msg.status;
      }
    );

  }

  /**
   * Calls in cascading manner first getRouteStagesForShipment (i.e. LogisticsTestbedV12/Shipments/{id}/RouteStages) and then getLocations (i.e. LogisticsTestbedV12/Locations/{id})
   * @param {string} id of the shipment
   * @returns {Observable<RouteStage>}
   */
  public obs_getRouteStagesForShipmentIncludingLocations(id: string): Observable<RouteStage> {
    return this.getRouteStagesForShipment(id)
    //.do(rs => console.log(rs))
      .mergeMap(
        routeStages => Observable.from(routeStages)
      ).mergeMap(
        (routeStage: RouteStage) => {

          let associations = routeStage.associations;

          let fromElement = associations.filter(association => association.relnName === 'from')[0];

          let fromLocationID = fromElement.data[0]._id;

          let toElement = associations.filter(association => association.relnName === 'to')[0];

          let toLocationID = toElement.data[0]._id;

          let fromSubscription = this.getLocation(fromLocationID);

          let toSubscription = this.getLocation(toLocationID);

          let routeObs = Observable.of(routeStage);

          return forkJoin([routeObs, fromSubscription, toSubscription]);
        }
      ).map(
        results => {
          let routeStage = results[0];

          routeStage.from = results[1];

          routeStage.to = results[2];

          return routeStage;
        }
      );

  }

  /**
   * Invokes getRouteStagesForShipment() and then extracts Location elements
   * @param {string} id
   * @returns {Observable<RouteStage>}
   */
  public old_getRouteStagesForShipmentIncludingLocations(id: string): Observable<RouteStage> {
    return this.getRouteStagesForShipment(id)
    //.do(rs => console.log(rs))
      .mergeMap(
        routeStages => Observable.from(routeStages)
      ).mergeMap(
        (routeStage: RouteStage) => {

          let associations = routeStage.associations;

          let fromElement = associations.filter(association => association.relnName === 'from')[0].data[0];
          routeStage.from = ShipmentsService.parseLocation(fromElement);

          let toElement = associations.filter(association => association.relnName === 'to')[0].data[0];
          routeStage.to = ShipmentsService.parseLocation(toElement);

          return Observable.of(routeStage);
        }
      );

  }

  /**
   * Invokes getRouteStagesForShipment() and then extracts Location elements
   * @param {string} id
   * @returns {Observable<RouteStage>}
   */
  public getRouteStagesForShipmentIncludingLocations(id: string): Observable<RouteStage> {
    return this.getRouteStagesForShipment(id)
    //.do(rs => console.log(rs))
      .mergeMap(
        routeStages => Observable.from(routeStages)
      ).map(
        (routeStage: RouteStage) => {

          let associations = routeStage.associations;

          let fromElement = associations.filter(association => association.relnName === 'from')[0].data[0];
          routeStage.from = ShipmentsService.parseLocation(fromElement);

          let toElement = associations.filter(association => association.relnName === 'to')[0].data[0];
          routeStage.to = ShipmentsService.parseLocation(toElement);

          return routeStage;
        }
      );

  }

  private static parseLocation(locationElement: any) : Location {

    if (locationElement.hasOwnProperty('assocData') && locationElement.assocData.type === 'Location'){
      return locationElement.assocData;
    }

    return null;
  }

  /**
   * Calls LogisticsTestbedV12/ShipmentUnits/{id}/LocationEvents
   * @param {string} id
   * @returns {Observable<LocationEvent[]>}
   */
  public getLocationEventsForShipmentUnit(id: string): Observable<LocationEvent[]> {
    let urlExtension = SHIPMENT_UNITS + '/' + id + "/" + LOCATION_EVENTS;

    return this.httpService.get(urlExtension).map(
      res => {
        return <LocationEvent[]> res
      },
      error => {
        return error;
      }
    );

  }

  public getLocationEventsForHackathon(id: string): Observable<LocationEventHack[]> {
    let urlExtension = 'https://us-central1-hackathon-195911.cloudfunctions.net/getInfo?_sm_au_=iVVTqWq3TvdjjMNf';//SHIPMENT_UNITS + '/' + id + "/" + LOCATION_EVENTS;

    return this.httpService.getNoExtension(urlExtension).map(
      res => {
        //console.log(res);
        
        return <LocationEventHack[]> res[0];
      },
      error => {
        return error;
      }
    );

  }   

  public getDelayEventsForShipmentUnit(id: string) : Observable <DelayEvent []> {

    let urlExtension = SHIPMENT_UNITS + '/' + id + "/" + DELAY_EVENTS;

    return this.httpService.get(urlExtension).map(
      res => {
        return <DelayEvent []> res
      },
      error => {
        return error;
      }
    );

  }

  public getDelayEventsForShipment(id: string) : Observable <DelayEvent []> {

    let urlExtension = SHIPMENTS + '/' + id + "/" + DELAY_EVENTS;

    return this.httpService.get(urlExtension).map(
      res => {
        return <DelayEvent []> res
      },
      error => {
        return error;
      }
    );

  }

}
