export const STATUSES = {
  //default
  '': {
    'completed': 'import-door-green',
    'not-ok': 'import-door-red',
    'planned': 'import-door-dark-gray',
    'in-progress': 'import-door-light-orange'
  },
  //  ImportDoor(Green, Red,...).png
  PUP: {
    'completed': 'import-door-green',
    'not-ok': 'import-door-red',
    'planned': 'import-door-dark-gray',
    'in-progress': 'import-door-light-orange'
  },
  //  ImportDoor(Green, Red,...).png
  TDEP: {
    'completed': 'import-door-green',
    'not-ok': 'import-door-red',
    'planned': 'import-door-dark-gray',
    'in-progress': 'import-door-light-orange'
  },
  //  ExportDoor(Green, Red,...).png
  TARPAN: {
    'completed': 'export-door-green',
    'not-ok': 'export-door-red',
    'planned': 'export-door-dark-gray',
    'in-progress': 'export-door-light-orange'
  },
  //  ExportStation(Green, Red,...).png
  REWCH: {
    'completed': 'export-station-green',
    'not-ok': 'export-station-red',
    'planned': 'export-station-dark-gray',
    'in-progress': 'export-station-light-orange'

  },
  //  booking(Green, Red,...).png
  REW: {
    'completed': 'booking-green',
    'not-ok': 'booking-red',
    'planned': 'booking-dark-gray',
    'in-progress': 'booking-light-orange'

  },
  //  ConnectionAirport(Green, Red,...).png
  RCS: {
    'completed': 'connection-airport-green',
    'not-ok': 'connection-airport-red',
    'planned': 'connection-airport-dark-gray',
    'in-progress': 'connection-airport-light-orange'
  },

  DEP: {
    'completed': 'stage-green-white-border',
    'not-ok': 'stage-red-white-border',
    'planned': 'stage-gray-white-border',
    'in-progress': 'stage-gray-white-border'

  },
  //  LastAirport(Green, Red,...).png
  ARR: {
    'completed': 'last-airport-green',
    'not-ok': 'last-airport-red',
    'planned': 'last-airport-dark-gray',
    'in-progress': 'last-airport-light-orange'

  },
  RCF: {
    'completed': 'stage-green-white-border',
    'not-ok': 'stage-red-white-border',
    'planned': 'stage-gray-white-border',
    'in-progress': 'stage-gray-white-border'

  },
  //  ExportDoor(Green, Red,...).png
  DLV: {
    'completed': 'export-door-green',
    'not-ok': 'export-door-red',
    'planned': 'export-door-dark-gray',
    'in-progress': 'export-door-light-orange'
  },
  //  ExportStation(Green, Red,...).png
  RIW: {
    'completed': 'export-station-green',
    'not-ok': 'export-station-red',
    'planned': 'export-station-dark-gray',
    'in-progress': 'export-station-light-orange'

  },
  //  ExportStation(Green, Red,...).png
  RIWCO: {
    'completed': 'export-station-green',
    'not-ok': 'export-station-red',
    'planned': 'export-station-dark-gray',
    'in-progress': 'export-station-light-orange'

  },
  //  ImportDoor(Green, Red,...).png
  OFD: {
    'completed': 'import-door-green',
    'not-ok': 'import-door-red',
    'planned': 'import-door-dark-gray',
    'in-progress': 'import-door-light-orange'
  },
  //  ExportDoor(Green, Red,...).png
  ArrCon: {
    'completed': 'export-door-green',
    'not-ok': 'export-door-red',
    'planned': 'export-door-dark-gray',
    'in-progress': 'export-door-light-orange'
  },
  //  ExportDoor(Green, Red,...).png
  POD: {
    'completed': 'export-door-green',
    'not-ok': 'export-door-red',
    'planned': 'export-door-dark-gray',
    'in-progress': 'export-door-light-orange'
  },
};

/*
[
  {
    "name": "PUP",
    "description": "Pick Up from Shipper/Supplier"
  },
  {
    "name": "TDEP",
    "description": "Truck departure from shipper/supplier"
  },
  {
    "name": "TARPAN",
    "description": "Truck arrival at Warehouse"
  },
  {
    "name": "REWCH",
    "description": "Checked in at PA Warehouse"
  },
  {
    "name": "REW",
    "description": "Handover by Customer at PA Warehouse"
  },
  {
    "name": "RCS",
    "description": "Freight Checkin-in at Departure Airline / First Airport"
  },
  {
    "name": "DEP",
    "description": "Goods confirmed on board 1st Flight"
  },
  {
    "name": "ARR",
    "description": "Arrived at last Airport"
  },
  {
    "name": "RCF",
    "description": "Freight Check-IN at Arrival Airport"
  },
  {
    "name": "DLV",
    "description": "Freight Delivery to Forwarder(DLV)"
  },
  {
    "name": "RIW",
    "description": "Checked in at PA Warehouse"
  },
  {
    "name": "RIWCO",
    "description": "Cargo checked out from PA warehouse"
  },
  {
    "name": "OFD",
    "description": "Truck out for Delivery"
  },
  {
    "name": "ArrCon",
    "description": "Truck arrival at Consignee"
  },
  {
    "name": "POD",
    "description": "Cargo Delivery to Door"
  }
]
*/