import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  constructor(private http:HttpClient) { }

  getMakes() {
    return this.http.get<any>('/api/makes');
  }

  getFeatures() {
    return this.http.get<any>('/api/features');
  }

  create(vehicle) {
    return this.http.post<any>(this.vehiclesEndpoint, vehicle);
  }

}
