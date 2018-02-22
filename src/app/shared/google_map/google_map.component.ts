import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  Output,
  OnInit,
  EventEmitter,
  PLATFORM_ID,
  Inject
} from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { stringify } from 'querystring';


declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'google_map.component.html',
  host: {class: 'google-map-test'},
})

export class GoogleMapComponent implements OnChanges, AfterViewInit, OnDestroy, OnInit {
 /**
   * Optional parameter mapOptions to inject
   * properties to customise the map.
   * Properties reference: google map api doc
   */
  @Input() public mapOptions: any = null;
  @Input() public address: string = null;
  @Input() public stages_marker: Array<any> = [];
  @Input() public geoCodedAddress: Array<any> = [];
  @Input() public poly_lines: Array<any> = [];

  public destroy = () => {};
  /**
   * When clickedMarker event fires response can be object
   * Default: false - returns number
   * @type {boolean}
   */
  @Input() public responseAsObject: boolean = false;
  @ViewChild('host') public host: any = null;
  @Output() public error: EventEmitter<any> = new EventEmitter<any>();
  @Output() public selectMarker: EventEmitter<number> = new EventEmitter<number>();
  @Output() public clickMarker: EventEmitter<number> = new EventEmitter<number>();
  private GOOGLE_URL = '//maps.googleapis.com/maps/api/js?key=AIzaSyB3XErBCSp0HMRB8jeXxsBSopau_YoWak0';


  public currentAddress: string = null;
  public map: any = null;
  public geocoder: any = null;
  public bounds: any;
  public loc: any;
  public map_bound_done: boolean;

  private config: any = {
    /**
     * When you have objects with lat & lng
     */
    isAdressesOnlyCoords: true,
    autoInit: true,
    autoCenterOnSelect: true,
    marker: {
      locationKey: 'position',
      titleKey: 'title',
      iconKey: 'icon',
      dataKey: 'data',
      iconActiveKey: 'iconActive'
    },
    panBy: {
      x: 0,
      y: 0
    }
  };
  private markers: any[] = [];

  /**
   *
   * @param platform_id
   */
  constructor(
    @Inject(PLATFORM_ID) public platform_id
  ) {}

  @Input('config')
  /**
   * merges custom config and default one
   * @param {any} value
   */
  public set customConfig(value: any) {
    Object.assign(this.config, value);
  }

  /**
   * Looks for changes in the input (address)
   * and renders the map again with the new address
   */
  public ngOnChanges() {
    console.log('google map onChange');
    if (typeof google !== 'undefined' && this.config.autoInit) { // The first time google is undefined (ngOnInit runs after ngOnChanges)
      this.updateGoogleMap();
    }
  }

  public ngOnInit() {
    console.log('init google map');
    this.googleMapInit();
    console.log('google map init done');
  }

  public ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform_id)) {
      this.initializeGoogleAPI();
    }
  }

  public ngOnDestroy(): void {
      console.log('google map destroy');
      this.destroy();
  }

  public openOptionsModal() {
    console.log('OPTIONS MODAL IN GOOGLE COMPONENT');
  }

  public updateGoogleMap = (): void => {
    if (this.stages_marker) {
      this.drawMarkers();
      this.map.fitBounds(this.bounds);
      this.map.panToBounds(this.bounds);
    }

    // Polyline support
    if (this.poly_lines) {
      this.drawPolyLiness();
      this.map.fitBounds(this.bounds);
      this.map.panToBounds(this.bounds);
    }

    if (this.address) {
      this.setAddress
    }

  }

  private setAddress() {
    this.geocoder.geocode({'address': this.address}, (results, status) => {
      if (status == 'OK') {
        this.currentAddress = `${results[0].formatted_address}`;
          let marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location,
          });
      } else {
        this.error.emit('Geocode was not successful for the following reason: ' + status);
        this.resetMap();
      }
    });
  }

  private drawPolyLiness() {
    let line_counter: number = 0;
    this.poly_lines.forEach((line: any) => {

      for (const path_point of line.path){
        this.loc = new google.maps.LatLng(path_point.lat, path_point.lng);
        this.bounds.extend(this.loc);
      }

      if (line.icons) {

        let pol_icon: any = {};
        let icon_offset: string = '';

        pol_icon.path = line.icons[0].path;
        pol_icon.scale = line.icons[0].scale;
        pol_icon.strokeOpacity = line.icons[0].strokeOpacity;
        pol_icon.fillColor = line.icons[0].fillColor;
        pol_icon.fillOpacity = line.icons[0].fillOpacity;
        pol_icon.strokeColor = line.icons[0].strokeColor;
        pol_icon.strokeWeight = line.icons[0].strokeWeight;
        pol_icon.clickable =  line.icons[0].clickable;
        pol_icon.fixed_rotation = line.icons[0].fixed_rotation;
        pol_icon.rotation = line.icons[0].rotation;
        icon_offset = line.icons[0].offset;

        if (line.icons[0].anchor_x && line.icons[0].anchor_y) {
            pol_icon.anchor = new google.maps.Point(line.icons[0].anchor_x, line.icons[0].anchor_y);
        }

        let poly_line = new google.maps.Polyline({
          path: line.path,
          geodesic: true,
          strokeColor: line.color,
          strokeOpacity: 0.8,
          strokeWeight: 3,
          icons: [
            {
              icon: pol_icon,
              offset: icon_offset,
              fixedRotation: line.icons[0].fixed_rotation,
            },
          ],
        });

        poly_line.setMap(this.map);
      } else {
        let poly_line = new google.maps.Polyline({
          path: line.path,
          geodesic: true,
          strokeColor: line.color,
          strokeOpacity: 0.8,
          strokeWeight: 3,
        });

        poly_line.setMap(this.map);
      }

      line_counter++;
    });

    /*
    if (!this.stages_marker) {
      this.map.fitBounds(this.bounds);
      this.map.panToBounds(this.bounds);
    }
     */
  }

  private drawMarkers() {
    this.stages_marker.forEach((marker_data: any) => {
      let myLatLng =  {
        lat: marker_data.lat,
        lng: marker_data.lng,
      };

//          console.log('MARKER: ' + JSON.stringify(marker_data));

      let marker = new google.maps.Marker({
        map: this.map,
        position: myLatLng,
        title: marker_data.label,
        icon: marker_data.icon,
      });

      var contentString = marker_data.info_window;

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
      marker.addListener('click', function() {
        infowindow.open(this.map, marker);
      });

      this.loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      this.bounds.extend(this.loc);

      // Show event overlays
      if (marker_data.event && marker_data.event !== '') {
  //    console.log("Event overlay: " + marker_data.event);
        let event_overlay = new google.maps.OverlayView();
        event_overlay.draw = function() {
          let self = this;
          let div = this.div;

          if (!div) {
            div = this.div = document.createElement('div');
            div.className = 'delay_event_overlay';
            div.innerHTML = marker_data.event;
            let panes = this.getPanes();
            panes.overlayImage.appendChild(div);
          }

          let point = this.getProjection().fromLatLngToDivPixel(marker.position);

          if (point) {
            div.style.left = point.x - 35 + 'px';
            div.style.top = point.y + 5 + 'px';
          }
        };

        event_overlay.setMap(this.map);
      }
  });
}

  /**
   * Checks if there is already a script tag with the api
   *
   * @returns {boolean}
   */
  public isAPITagInitialized(): boolean {
    let sourceUrl = this.GOOGLE_URL;
    return document.querySelector('script[src="' + sourceUrl + '"]') !== null;
  }

  /**
   * Handles error from api loading
   */
  public handleAPILoadError = (): void => {
    throw new Error('GoogleMaps API cannot be loaded!');
  };

  /**
   * Creates the map with the given addres and the options for it
   */
  public googleMapInit = (): void => {
    if (typeof google !== 'undefined') {
      
      /*
       * Checkout the available options here:
       * https://developers.google.com/maps/documentation/javascript/reference#MapOptions
       * */
      let mapProp: any = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false
      };

      if (this.mapOptions) {
        for (let option in this.mapOptions) {
          if (this.mapOptions.hasOwnProperty(option)) {
            mapProp[option] = this.mapOptions[option];
          }
        }
      }
      let container = this.host.nativeElement;

      this.map = new google.maps.Map(container, mapProp);
      this.geocoder = new google.maps.Geocoder();
      this.bounds  = new google.maps.LatLngBounds();
      this.loc = new google.maps.LatLng();

      this.updateGoogleMap();
    }
  };


  /**
   * Checks that map is initialized or not
   * @return {boolean} -returns true when is initialized
   */
  public isMapInit(): boolean {
    return !!this.host.nativeElement.firstChild;
  }

  /**
   * Resets the map to show the whole world
   * in case of a not found address
   */
  public resetMap(): void {
    let allowedBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(85, -180), // top left corner of map
      new google.maps.LatLng(-85, 180)  // bottom right corner
    );

    let k = 5.0;
    let n = allowedBounds.getNorthEast().lat() - k;
    let e = allowedBounds.getNorthEast().lng() - k;
    let s = allowedBounds.getSouthWest().lat() + k;
    let w = allowedBounds.getSouthWest().lng() + k;
    let neNew = new google.maps.LatLng(n, e);
    let swNew = new google.maps.LatLng(s, w);
    let boundsNew = new google.maps.LatLngBounds(swNew, neNew);
    this.map.fitBounds(boundsNew);

    this.currentAddress = '';
  }

  /**
   * Adds the script for google api (lazy load)
   */
  public initializeGoogleAPI(): void {
    if (!this.isAPITagInitialized() && isPlatformBrowser(this.platform_id)) {
      let tag: any = document.createElement('script');
      tag.addEventListener('error', this.handleAPILoadError);
      if (this.config.autoInit) {
        tag.addEventListener('load', this.googleMapInit);
      }
      tag.src = this.GOOGLE_URL;
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.destroy = () => {
        tag.removeEventListener('error', this.handleAPILoadError);
        if (this.config.autoInit) {
          tag.removeEventListener('load', this.googleMapInit);
        }
      }

    } else if (this.isAPITagInitialized() && typeof google != 'undefined' && this.config.autoInit) {
      this.googleMapInit();
    } else {
      let tag: any = document.querySelector('script[src="' + this.GOOGLE_URL + '"]');
      if (this.config.autoInit) {
        tag.addEventListener('load', this.googleMapInit);
      }

      this.destroy = () => {
        if (this.config.autoInit) {
          tag.removeEventListener('error', this.googleMapInit);
        }
      }
    }
  }

  /**
   * Sets map center
   * @param {any} bounds
   */
  public setMapCenter(bounds?: any): void {
    if (this.geoCodedAddress.length === 1) {
      let location: any = this.geoCodedAddress[0];

      if (!this.config.isAdressesOnlyCoords) {
        location = this.geoCodedAddress[0][this.config.marker.locationKey];
      }

      this.map.setCenter(location);
    } else if (bounds) {
      this.map.fitBounds(bounds);
      this.map.panBy(this.config.panBy.x, this.config.panBy.y);
    }
  }

  public openMap(): void {
    /*
    if (isPlatformBrowser(this.platform_id) && this.currentAddress) {
      window.open(`https://www.google.com/maps/place/${this.currentAddress.replace(' ', '+')}`, '_blank');
    }
     */
  }

  /**
   * Returns marker options
   * @param {any} map
   * @param {any} address
   * @returns {any}
   */
  private getMarkerOptions(map: any, address: any): any {
    let markerOptions: any = {
      map: map,
      position: address,
      //TODO fix the icon path not recognized by webpack
    };

    if (!this.config.isAdressesOnlyCoords) {
      let title = address[this.config.marker.titleKey];
      if (title) {
        markerOptions.title = title;
      }

      let position = address[this.config.marker.locationKey];
      if (position) {
        markerOptions.position = position;
      }

      let icon = address[this.config.marker.iconKey];
      if (icon) {
        markerOptions.icon = icon;
      }
    }

    return markerOptions;
  }

}
