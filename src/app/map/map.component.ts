import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: google.maps.Map | undefined;
  private marker: google.maps.Marker | undefined;

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer?.nativeElement, mapOptions);
  }

  placeMarker(address: string): void {
    if (this.map) {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]?.geometry?.location) {
          const location = results[0].geometry.location;
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: address
          });
          this.map.setCenter(location);
        }
      });
    }
  }
}
