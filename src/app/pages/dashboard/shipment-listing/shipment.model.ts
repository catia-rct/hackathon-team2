export class Shipment {

  public id: number;
  shipment_name: string;
  public from: string;
  public to: string;
  public status: any;
  public truckId: string;

  constructor(shipment: any) {
    this.id = shipment.id || 0;
    this.shipment_name = shipment.Name || '';
    this.from = shipment.originLocation || '';
    this.to = shipment.destinationLocation || '';
    this.status = shipment.status;
    this.truckId = shipment.truckId;
  }
}