import { Component } from '@angular/core';
import { VehicleInterface, VEHICLES_DATA, VehicleStatus, VehicleType } from './utils/vehicles-data';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  protected vehicles: VehicleInterface[] = VEHICLES_DATA;
  protected vehicleStatus: VehicleStatus = VehicleStatus.available;
  protected vehicleType: VehicleType = VehicleType.truck;
}
