import { KeyValuePair, Vehicle } from './../../models/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  makes: KeyValuePair[];
  query: any = {
    pageSize: 3
  };
  columns = [
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    {}
  ];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() { 
    this.vehicleService.getMakes()
      .subscribe((makes:KeyValuePair[]) => this.makes = makes);
    
    this.populateVehicles();
  }

  onFilterChange() {
    this.populateVehicles();
  }

  private populateVehicles() {
    this.vehicleService.getVehicles(this.query)
      .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }

  resetFilter() {
    this.query = {};
    this.onFilterChange();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending; ; 
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateVehicles();
  }

  onPageChange(page) {
    this.query.page = page; 
    this.populateVehicles();
  }

} 