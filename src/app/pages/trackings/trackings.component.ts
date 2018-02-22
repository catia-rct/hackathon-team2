import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscribable} from "rxjs/Observable";
import {Subscription} from 'rxjs/Subscription';
import {ShipmentsService, RouteStage, LocationEvent, LocationEventHack} from '../../shared';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OptionsModalComponent} from './modals/options-modal/options-modal.component';
import {ShipmentListingService, MilestoneViewModes, Intervals} from '../../shared';
import {PLANE_SYMBOL, TRUCK_RIGHT_SYMBOL, TRUCK_LEFT_SYMBOL, WARNING_SYMBOL} from "./enums/map_symbols";
import { Location } from '@angular/common';

@Component({
  selector: 'trackings',
  templateUrl: './trackings.component.html',
  styleUrls: ['./trackings.component.scss'],
})
export class TrackingsComponent implements OnInit, OnDestroy, AfterViewInit {
  public MILESTONE_VIEW_MODES = MilestoneViewModes;
  public INTERVALS = Intervals;

  public currentViewMode: string = '';
  public routeStages: Array<any> = null;
  private refreshInterval: any = null;
  private mapRefreshInterval: any = null;
  private locationEvents: LocationEventHack[];
  
  private routeSubscription: Subscription;
  private mapDataSubscription: Subscription;
  private packId: string;
  private shipUnitID: string;
  private truckId: string;
  private route_stages: RouteStage[];
  public data: any = null;
  public testAddres = '';
  public testConfig = {
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    disableDefaultUI: false,
  };
  public stages_marker;
  public poly_lines;

  public plane_symbol = PLANE_SYMBOL;
  public truck_right_symbol = TRUCK_RIGHT_SYMBOL;
  public truck_left_symbol = TRUCK_LEFT_SYMBOL;
  private warning_symbol = WARNING_SYMBOL;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private shipmentListingService: ShipmentListingService,
              private shipmentsService: ShipmentsService,
              private modalService: NgbModal,
              private location: Location) {
    //this.refreshInterval = setInterval(
      this.handleNewRouteParams.bind(this, this.route.snapshot.params);//, this.INTERVALS.refreshInterval);
  }


  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      console.log(params);
        this.handleNewRouteParams(params)
    });
  }

  ngAfterViewInit(): void {
    console.log('initing trackings');
    console.log('this.shipUnitID: ' + this.shipUnitID);
    if (this.shipUnitID) {
      this.gatherLocationEventsDataForShipmentUnitWithInterval;
    } else {
     // console.log('no shippingunit id: ' + this.packId);
      //this.gatherShipmentUnitsForShipment();
      this.gatherRouteStageDataWithInterval();
    }
  }

 /* private gatherShipmentUnitsForShipment() {
    this.shipmentListingService.getShipmentUnits(this.packId).then(response => {
      //this.shipmentUnits = response;
      this.shipUnitID = response[0].id;
      console.log('GEtting shipping units: ' + response);
      this.gatherLocationEventsDataForShipmentUnitWithInterval;
    }).catch(error => {
      console.error(error);
    });
  } */

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    if (this.mapRefreshInterval) {
      clearInterval(this.mapRefreshInterval);
    }
    if (this.mapDataSubscription) {
      this.mapDataSubscription.unsubscribe();
    }
  }

  /**
   * Executed when the route changes etc routeParams change
   * Makes a request for a specific shipment with the id from the url
   * @param params
   */
  private handleNewRouteParams(params: any) {
    this.packId = params['packId'];
    this.shipUnitID = params['shUnitId'];
    this.truckId = params['truckId'];
    //console.log('truckId: ' + this.truckId);
    // if it is a shipment unit set the view mode and request the appropriate data
    if (params['shUnitId']) {
      this.currentViewMode = this.MILESTONE_VIEW_MODES.shipmentUnit;
      this.shipmentListingService.getShipmentUnitById(params['shUnitId']).then(response => {
        this.data = response;
        this.shipmentListingService.getDataForMilestoneView(this.data).then(data => {
          if (data) {
            this.routeStages = data;
          }
        });
      });

      this.getLocationEventsDataForShipmentUnit();
      // else it is a shipment set the view mode and request the shipment data
    } else {
      this.currentViewMode = this.MILESTONE_VIEW_MODES.shipment;
      this.shipmentListingService.getShipmentById(this.packId).then(response => {
        this.data = response;
        this.shipmentListingService.getDataForMilestoneView(this.data).then(data => {
          if (data) {
            this.routeStages = data;
          }
        });
      });

      this.gatherRouteStageData();
    }

  }

  private gatherRouteStageDataWithInterval() {

  //  this.mapRefreshInterval = setInterval(() => {
      this.gatherRouteStageData();
   // }, 10000);
  }

  private gatherLocationEventsDataForShipmentUnitWithInterval() {
   // this.mapRefreshInterval = setInterval(() => {
      this.getLocationEventsDataForShipmentUnit();
  //  }, 10000);
  }

  private getLocationEventsDataForShipmentUnit() {
    this.mapDataSubscription = this.shipmentsService.getLocationEventsForHackathon(this.shipUnitID).toArray().subscribe(
      results => {
        console.log('results');
        console.log(results);
        
        this.locationEvents = results[0].filter(locEvent => locEvent.truckId === this.truckId);
        this.handleLocationEvents();
    });

    
    // this.mapDataSubscription = this.shipmentsService.getLocationEventsForShipmentUnit(this.shipUnitID).toArray().subscribe(
    //   results => {
    //     this.locationEvents = results[0];
    //     this.handleLocationEvents();
    // });
  }

  private gatherRouteStageData() {
    this.mapDataSubscription = this.shipmentsService.getRouteStagesForShipmentIncludingLocations(this.packId).toArray().subscribe(
      results => {
        this.route_stages = results;
        this.handleRouteStages();
    });
  }

  public openOptionsModal() {
    console.log('Open Options Modal');
  }

  private handleLocationEvents() {
    // console.log('this.locationEvents: ' + JSON.stringify(this.locationEvents));
    let amount_loc: number = 0;
    let buff_poly_lines: any[] = [];
    let poly_start_point: any;
    let poly_end_point: any;
    let poly_line: any;
    let poly_line_color = '#7177A6';
    let prev_point: number[];
    let amount_loc_events: number = this.locationEvents.length;

    for (const loc_event of this.locationEvents){
     // console.log('loc_event[' + amount_loc + ']: ' + JSON.stringify(loc_event) + ' lat: ' + loc_event.latitude + 'lng: ' + loc_event.longitude);
      let temp_point: number[] = this.genLatLong(loc_event.latitude, loc_event.longitude);

      if (amount_loc === 0) {
        prev_point = temp_point;
      } else {
       // console.log('prev_point: ' + JSON.stringify(prev_point) + ' temp_point: ' + JSON.stringify(temp_point));
        poly_start_point = {
          lat: prev_point[0],
          lng: prev_point[1],
        };

        poly_end_point = {
          lat: temp_point[0],
          lng: temp_point[1],
        };

        poly_line = {
            path: [poly_start_point, poly_end_point],
            color: poly_line_color,
        };
        // add the vehicle icon at the end of the polyline path
        if (amount_loc === (amount_loc_events - 1)) {
          let poly_icon: any = {
            path: this.truck_left_symbol,
            scale: 1.2,
            strokeOpacity: 1,
            fillColor: poly_line_color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 0,
            clickable: true,
            fixed_rotation: true,
            rotation: 0,
            anchor_x: 20,
            anchor_y: +30,
            offset: '100%',
          };
          

          poly_line.icons = [poly_icon];
        }
        else if(amount_loc ===20){
          let poly_icon: any = {
            path: this.warning_symbol, //set alert symbol
            scale: 0.7,
            strokeOpacity: 1,
            fillColor: '#cc0000',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 0,
            clickable: true,
            fixed_rotation: true,
            rotation: 0,
            anchor_x: 4,
            anchor_y: +35,
            offset: '100%',
          };
          

          poly_line.icons = [poly_icon];
        }

//        console.log('poly_line: ' + JSON.stringify(poly_line) );
        buff_poly_lines.push(poly_line);
//        console.log('prev_point: ' + JSON.stringify(prev_point) + ' temp_point: ' + JSON.stringify(temp_point));
        prev_point = temp_point;
      }

      amount_loc++;
    }
    this.poly_lines = buff_poly_lines;
  }

  private handleRouteStages() {
    let milestones: any[];
    let events: any[];
    let buff_stages_marker: any[] = [];
    let poly_start_point: any;
    let poly_end_point: any;
    let poly_line: any;
    let poly_symbol_scale: number;
    let poly_symbol_fill_color: string;
    let poly_symbol_rotation: number;
    let poly_symbol_translate: any;
    let buff_poly_lines: any[] = [];

    const amount_stages: number = this.route_stages.length;

//    console.log('route_stages:' + JSON.stringify(this.route_stages));
    let path_symbol: string;
    let info_window: any;
    let info_windows: any[] = [];

    let marker_counter: number = 0;
    let prev_event: string = '';

    const default_icon: string = 'assets/images/stage-grey-white-border.png';
    const default_poly_line_color: string = '#969696';
    const green_icon: string = 'assets/images/stage-green-white-border.png';
    const green_poly_line_color: string = '#A7BF73';
    const red_icon: string = 'assets/images/stage-red-white-border.png';
    const red_poly_line_color: string = '#D17379';
    const blue_icon: string = 'assets/images/stage-blue-white-border.png';
    const blue_poly_line_color: string = '#7177A6';

    for (const stage  of this.route_stages){
//      console.log('stage:' + JSON.stringify(stage));
      let stage_sequence: number = 0;
      let show_options: boolean = false;
      let lat_long: number[];
      let ata: string;
      let eta: string;
      let etd: string;
      let atd: string;
      let stage_status: string;
      let icon: string;
      let event: string = '';
      let poly_line_color: string;

      stage_sequence = stage.sequenceNumber;

      let info_window_obj: string = '';

      etd = stage.ETD;
      atd = stage.ATD;
      ata = stage.ATA;
      eta = stage.ETA;

      stage_status = stage.status;

//      console.log('STAGE: ' + stage_sequence + ' STATUS: ' + stage_status);

      // FIRST START MARKER IS SPECIAL
      if (marker_counter === 0) {

        info_window = {
          'title': stage.from.Name,
          'etd': etd,
          'atd': atd,
          'ata': 'n/a',
          'eta': 'n/a',
          'show_options': show_options,
        };

        info_windows[marker_counter] = info_window;

        info_window_obj = this.genMarkerInfoWindow(info_windows[marker_counter]);

        lat_long = this.genLatLong(stage.from.latitude, stage.from.longitude);

        buff_stages_marker[marker_counter] = {
            lat: lat_long[0],
            lng: lat_long[1],
            info_window: info_window_obj,
            label: stage.from.Name,
            icon: green_icon,
            show_options: show_options,
            mode_of_transport: stage.modeOfTransport,
            event: prev_event,
        };
        marker_counter++;
      }

      // default icons and poylines...in case we have broken state-names
      icon = default_icon;
      poly_line_color = default_poly_line_color;

      if (stage_status === 'Planned') {
        icon = default_icon;
        poly_line_color = default_poly_line_color;
      }
      if (stage_status === 'Completed') {
        icon = green_icon;
        poly_line_color = green_poly_line_color;
      }
      if (stage_status === 'NotOk') {
        icon = red_icon;
        poly_line_color = red_poly_line_color;
      }
      if (stage_status === 'InProgress') {
        icon = blue_icon;
        poly_line_color = blue_poly_line_color;
      }

      // EVENT HANDLING
      if (stage.embedded && stage.embedded[1]
          && stage.embedded[1].entities
          && stage.embedded[1].entities[0]) {
        events = stage.embedded[1].entities;
        for (const event_data  of events){
          if (event_data.type === 'DelayEvent') {
            event = 'Delay (+' + event_data.DelayDuration + ' min)';
          }
        }
      }

      if (stage_sequence == amount_stages) {
        etd = 'n/a';
        atd = 'n/a';
      }

      /*
      if (event !== '') {
        show_options = true;
      }
       */

      info_window = {
          'title': stage.to.Name,
          'etd': etd,
          'atd': atd,
          'ata': ata,
          'eta': eta,
          'show_options': show_options,
      };
      info_windows[stage_sequence] = info_window;

      info_window_obj = this.genMarkerInfoWindow(info_windows[stage_sequence]);

      lat_long = this.genLatLong(stage.to.latitude, stage.to.longitude);

      buff_stages_marker[marker_counter] = {
          lat: lat_long[0],
          lng: lat_long[1],
          info_window: info_window_obj,
          label: stage.to.Name,
          icon: icon,
          mode_of_transport: stage.modeOfTransport,
          event: event,
      };

      marker_counter++;
      let poly_icon: any;
      if (stage.modeOfTransport === 'Plane') {
        poly_icon = {
            path: this.plane_symbol,
            scale: 1.2,
            strokeOpacity: 1,
            fillColor: poly_line_color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 0,
            clickable: true,
            fixed_rotation: false,
            rotation: -115,
            anchor_x: 10,
            anchor_y: -10,
            offset: '50%',
        };
      }

      if (stage.modeOfTransport === 'Truck') {
        poly_icon = {
            path: this.truck_right_symbol,
            scale: 1.2,
            strokeOpacity: 1,
            fillColor: poly_line_color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 0.5,
            clickable: true,
            fixed_rotation: true,
            rotation: 0,
            offset: '50%',
        };
      }

      const temp_start_point: number[] = this.genLatLong(stage.from.latitude, stage.from.longitude);
      const temp_end_point: number[] = this.genLatLong(stage.to.latitude, stage.to.longitude);
      poly_start_point = {
        lat: temp_start_point[0],
        lng: temp_start_point[1],
      };

      poly_end_point = {
        lat: temp_end_point[0],
        lng: temp_end_point[1],
      };

      poly_line = {
          path: [poly_start_point, poly_end_point],
          color: poly_line_color,
          icons: [poly_icon],
      };
      buff_poly_lines.push(poly_line);

      marker_counter++;
    }

//    console.log('poly_lines:' + JSON.stringify(buff_poly_lines));
    this.poly_lines = buff_poly_lines;
    this.stages_marker = buff_stages_marker;
  }

  private genMarkerInfoWindow(marker_info: any): string {
    let info_window_content: string;

//    console.log('marker_info: ' + JSON.stringify(marker_info));

    info_window_content = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h6 id="firstHeading" class="firstHeading">' + marker_info.title + '</h6>' +
      '<div id="bodyContent">';

    info_window_content += '<table>';
    info_window_content += '<tr>';
    info_window_content += '<td><strong>ETD</strong></td><td>' + marker_info.etd + '</td>';
    info_window_content += '<tr>';
    info_window_content += '<tr>';
    info_window_content += '<td><strong>ATD</strong></td><td>' + marker_info.atd + '</td>';
    info_window_content += '<tr>';
    info_window_content += '<tr>';
    info_window_content += '<td><strong>ATA</strong></td><td>' + marker_info.ata + '</td>';
    info_window_content += '<tr>';
    info_window_content += '<tr>';
    info_window_content += '<td><strong>ETA</strong></td><td>' + marker_info.eta + '</td>';
    info_window_content += '<tr>';
    info_window_content += '</table>';

    if (marker_info.show_options === true) {
      info_window_content += '<div><hr/></div>' +
        '<button id="info_window_button" type="button" class="btn btn-primary btn-with-icon btn-tn" (click)="openOptionsModal()">' +
        '<i class="ion-arrow-right-c"></i>' +
        '<span>Option</span></button>';
    }
    info_window_content += '</div>' +
      '</div>';

    return info_window_content;
  }

  private genLatLong(latitude: any, longitude: any): [number, number] {
    let temp_string_latitude: string;
    let temp_string_longitude: string;
    let lat: number;
    let lng: number;

    if (typeof latitude === 'string') {
      temp_string_latitude = latitude.replace(/[^ -~]+/g, '');
      lat = Number(latitude);
    } else {
      lat = latitude;
    }

    if (typeof longitude === 'string') {
      temp_string_longitude = longitude.replace(/[^ -~]+/g, '');
      lng = Number(longitude);
    } else {
      lng = longitude;
    }

    return [lat, lng];
  }

  /**
   * Return app to starting route
   */
  public goBack() {
    this.location.back();
  }

  public openModal(id: number, milestoneObj: any) {
    //this.data.embedded[0].entities[0]
    let currentRouterStage = milestoneObj;
    let locationId = currentRouterStage.associations[0].data[0]._id;
    let delayEvents = this.getDelayEvents(currentRouterStage);
    let delay = 0;

    for (let i = 0; i < delayEvents.length; i++) {
      delay = delay + parseInt(delayEvents[i]['DelayDuration']);
    }

    this.shipmentListingService.getLocationById(locationId).then((data) => {
      const activeModal = this.modalService.open(OptionsModalComponent, {size: 'lg', container: 'trackings'});
      activeModal.componentInstance.shipmentUnitId = id;
      activeModal.componentInstance.modalData = {
        name: currentRouterStage.Name,
        estimate: currentRouterStage.ETA,
        delay: delay,
        location: data.Name,
        status: 'AIRPORT_OK',
        flightsList: [
          {
            id: 'cv8623',
            name: 'CV8623'
          },
          {
            id: 'cv8607',
            name: 'cv8607'
          },
          {
            id: 'cv8604',
            name: 'CV8604'
          },
          {
            id: 'cv8626',
            name: 'CV8626'
          }
        ]
      };
    });
  }

  /**
   * Get delay data
   * @param embededList
   * @returns {Array}
   */
  private getDelayEvents(embededList) {
    embededList = embededList.embedded;
    let eventList = [];
    let delay = [];

    for (let key in embededList) {
      if (embededList[key]['parentRelnName'] === 'eventHistory') {
        eventList = embededList[key]['entities'];
        break;
      }
    }

    for (let j = 0; j < eventList.length; j++) {
      if (eventList[j]['type'] === 'DelayEvent') {
        delay.push(eventList[j]);
      }
    }

    return delay;
  }

}