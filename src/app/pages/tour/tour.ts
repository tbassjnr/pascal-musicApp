import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourService } from '../../core/model/service/tour.service';
import { TourShow } from '../../core/model/interface/tour.show';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

declare var google: any;

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule, FormsModule,GoogleMapsModule],
  templateUrl: './tour.html',
  styleUrls: ['./tour.css']
})
export class Tour implements OnInit, AfterViewInit {

  upcomingShows: TourShow[] = [];
  recentShows: TourShow[] = [];
  email: string = '';

  constructor(
    private tourService: TourService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.tourService.getUpcomingShows()
      .subscribe(data => this.upcomingShows = data);

    this.tourService.getRecentShows()
      .subscribe(data => this.recentShows = data);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.waitForGoogleMaps();
    }
  }

  private waitForGoogleMaps(): void {
    const interval = setInterval(() => {
      if (typeof google !== 'undefined' && google.maps) {
        clearInterval(interval);
        this.initMap();
      }
    }, 100);
  }

  private initMap(): void {
    const mapOptions = {
      center: { lat: 4.885, lng: -1.756 },
      zoom: 13
    };

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    new google.maps.Marker({
      position: { lat: 4.885, lng: -1.756 },
      map: map,
      title: 'Takoradi Show'
    });
  }

  subscribe(): void {
    if (this.email) {
      alert(`Thank you! ${this.email} has been added to our list.`);
      this.email = '';
    }
  }
}
