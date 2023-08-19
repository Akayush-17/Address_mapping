import { Component, OnInit } from '@angular/core';
import { MOCK_PROFILES } from '../mock-data/mock-profile';
import { MapService } from '../services/map.services';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles = MOCK_PROFILES;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  showProfileSummary(profile: any): void {
    this.mapService.placeMarker(profile.address);
  }
}
