import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapComponent: any;

  setMapComponent(mapComponent: any): void {
    this.mapComponent = mapComponent;
  }

  placeMarker(address: string): void {
    if (this.mapComponent) {
      this.mapComponent.placeMarker(address);
    }
  }
}
