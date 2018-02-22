import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, OnDestroy} from '@angular/core';
import {NbColorHelper} from '@nebular/theme';
import {DatePipe} from '@angular/common';
import {ShipmentListingService} from '../../../../../shared';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sensor-data-tab',
  templateUrl: './sensor-data-tab.component.html',
  styleUrls: ['./sensor-data-tab.component.scss']
})
export class SensorDataTabComponent implements AfterViewInit, OnDestroy {


  public colors = {
    primary: '#373c8c',
    danger: '#d91a26',
    info: '#00c300'
  };

  public MAX_HUMIDITY = 100;
  public MIN_HUMIDITY = 0;

  public MAX_TEMPERATURE = 60;
  public MIN_TEMPERATURE = -20;

  public MAX_SHOCK = 4;
  public MIN_SHOCK = -4;

  public shockOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          ticks: {
            min: this.MIN_SHOCK,
            max: this.MAX_SHOCK
          },
        }],


      }
  };

  public temperatureOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          ticks: {
            min: this.MIN_TEMPERATURE,
            max: this.MAX_TEMPERATURE
          },
        }],


      }
  };

  public humidityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          ticks: {
            min: this.MIN_HUMIDITY,
            max: this.MAX_HUMIDITY
          },
        }],


      }
  };

  public currentShockValue = null;
  public currentTemperatureValue = null;
  public currentHumidityValue = null;
  private refreshInterval;

  constructor(private datePipe: DatePipe,
              private shipmentListingService: ShipmentListingService,
              private cdr: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.requestData();
    this.requestData.bind(this)
    //this.refreshInterval = setInterval(this.requestData.bind(this), 10000);
  }

  private requestData() {
    const shipmentUnitId = this.activatedRoute.snapshot.params['shUnitId'];
    this.shipmentListingService.getSensorData(shipmentUnitId).then(data => {
      this.prepareData(data);
      this.cdr.detectChanges();
    }).catch(error => {
      console.error(error);
    });
  }

  private prepareData(data: Array<any>) {
    this.prepareShockEvents(data[0]);
    this.prepareHumidityEvents(data[2]);
    this.prepareTemperatureEvents(data[1]);
  }

  private prepareShockEvents(shockEvents) {
    if (Array.isArray(shockEvents)) {
      const shockEventsObj = {labels: [], values: []};
      // get random 10 sequent elements from array
      const randomIndex = Math.floor(Math.random() * (shockEvents.length - 10 ));
      shockEvents = shockEvents.slice(randomIndex, randomIndex + 10);

      shockEvents.forEach((shockEvent) => {
        shockEventsObj.labels.push(this.datePipe.transform(shockEvent.dateCreated, 'd ,MMM, yy, h:mm a'));
        shockEventsObj.values.push(shockEvent.shock_value);
      });
      this.shockEventsData.labels = shockEventsObj.labels;
      this.shockEventsData.datasets[0].data = shockEventsObj.values;
      this.currentShockValue = shockEventsObj.values[shockEventsObj.values.length - 1];
    }
  }

  private prepareTemperatureEvents(temperatureEvents) {
    if (Array.isArray(temperatureEvents)) {
      const temperatureEventsObj = {labels: [], values: []};

      // get random 10 sequent elements from array
      const randomIndex = Math.floor(Math.random() * (temperatureEvents.length - 10 ));
      temperatureEvents = temperatureEvents.slice(randomIndex, randomIndex + 10);

      temperatureEvents.forEach((temperatureEvent) => {
        temperatureEventsObj.labels.push(this.datePipe.transform(temperatureEvent.dateCreated, 'd ,MMM, yy, h:mm a'));
        temperatureEventsObj.values.push(temperatureEvent.temperature_value);
      });
      console.log(temperatureEventsObj);
      temperatureEventsObj.values[8]=45;
      temperatureEventsObj.values[9]=45;
      this.temperatureEventsData.labels = temperatureEventsObj.labels;
      this.temperatureEventsData.datasets[0].data = temperatureEventsObj.values;
      this.currentTemperatureValue = temperatureEventsObj.values[temperatureEventsObj.values.length - 1];
      
    }
  }

  private prepareHumidityEvents(humidityEvents) {
    if (Array.isArray(humidityEvents)) {
      const humidityEventsObj = {labels: [], values: []};

      // get random 10 sequent elements from array
      const randomIndex = Math.floor(Math.random() * (humidityEvents.length - 10 ));
      humidityEvents = humidityEvents.slice(randomIndex, randomIndex + 10);

      humidityEvents.forEach((humidityEvent) => {
        humidityEventsObj.labels.push(this.datePipe.transform(humidityEvent.dateCreated, 'd ,MMM, yy, h:mm a'));
        humidityEventsObj.values.push(humidityEvent.humidity_value);
      });
      this.humidityEventsData.labels = humidityEventsObj.labels;
      this.humidityEventsData.datasets[0].data = humidityEventsObj.values;
      this.currentHumidityValue = humidityEventsObj.values[humidityEventsObj.values.length - 1];
    }
  }


  public shockEventsData = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Shock Events (g)',
      backgroundColor: 'transparent',
      borderColor: this.colors.info,
      borderWidth: 1
    },
    ],
  };

  public temperatureEventsData = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Temperature (C)',
      backgroundColor: 'transparent',
      borderColor: this.colors.danger,
      borderWidth: 1
    },
    ],
  };

  public humidityEventsData = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Humidity (%)',
      backgroundColor: 'transparent',
      borderColor: this.colors.primary,
      borderWidth: 1
    },
    ],
  };

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }
  }
}