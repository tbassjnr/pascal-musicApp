import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourService } from '../../core/model/service/tour.service';
import { TourShow } from '../../core/model/interface/tour.show';
import { GoogleMapsModule } from '@angular/google-maps';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule, FormsModule, GoogleMapsModule,],
  templateUrl: './tour.html',
  styleUrls: ['./tour.css']
})

export class Tour implements OnInit, AfterViewInit, OnDestroy {
  upcomingShows: TourShow[] = [];
  recentShows: TourShow[] = [];
  email: string = '';
  private timeSubscription?: Subscription;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private autoSlideSub?: Subscription;

  map: any;
  private AdvancedMarkerElement: any; // Added this to store the library

  constructor(
    private tourService: TourService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.tourService.getUpcomingShows().subscribe(data => {
      this.upcomingShows = data;
      // Now this works because addMarkers doesn't require an argument anymore
      if (this.map && this.AdvancedMarkerElement) {
        this.addMarkers();
      }
    });

    

    this.tourService.getRecentShows().subscribe(data => this.recentShows = data);

    this.loadShows();

    // Check every 60 seconds if a show has moved to "Recent"
    this.timeSubscription = interval(60000).subscribe(() => {
      this.loadShows();
    });
  }

  scrollToUpcoming(): void {
  // Ensure we are in the browser before trying to access the DOM
  if (isPlatformBrowser(this.platformId)) {
    const element = document.getElementById('upcomingShowsSection');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
    }
  }
}

  loadShows(): void {
    this.tourService.getUpcomingShows().subscribe(data => {
      this.upcomingShows = data;
    });

    this.tourService.getRecentShows().subscribe(data => {
      this.recentShows = data;
    });
  }

   ngOnDestroy(): void {
    // Stop the timer when the user leaves the page
    this.timeSubscription?.unsubscribe();
    this.stopAutoSlide();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.waitForGoogleMaps();
      this.startAutoSlide();// Start the auto-sliding
    }
  }

  startAutoSlide(): void {
    // Only slide if we have enough shows to scroll (more than 3)
    this.autoSlideSub = interval(3000).subscribe(() => {
      const el = this.scrollContainer.nativeElement;
      const cardWidth = el.offsetWidth / (window.innerWidth > 992 ? 3 : window.innerWidth > 576 ? 2 : 1);
      
      // If we've reached the end, snap back to the start
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Otherwise, slide by one card width
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    });
  }

  stopAutoSlide(): void {
    this.autoSlideSub?.unsubscribe();
  }

  private waitForGoogleMaps(): void {
    const interval = setInterval(() => {
      if (typeof google !== 'undefined' && google.maps) {
        clearInterval(interval);
        this.initMap();
      }
    }, 100);
  }

  private async initMap(): Promise<void> {
    try {
      // Import the libraries
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      
      // Store the marker class so other functions can use it
      this.AdvancedMarkerElement = AdvancedMarkerElement;

      const mapOptions = {
        center: { lat: 4.885, lng: -1.756 }, // Center of your tour area
        zoom: 10,
        mapId: 'DEMO_MAP_ID' // Required for Advanced Markers
      };

      this.map = new Map(document.getElementById('map') as HTMLElement, mapOptions);

      if (this.upcomingShows.length > 0) {
        this.addMarkers();
      }
    } catch (error) {
      console.error("Error loading Google Maps libraries:", error);
    }
  }

  // FIXED: Removed the required parameter
  private addMarkers(): void {
    if (!this.map || !this.AdvancedMarkerElement || !this.upcomingShows.length) return;

    const bounds = new google.maps.LatLngBounds();

    this.upcomingShows.forEach(show => {
      if (show.lat && show.lng) {
        const position = { lat: show.lat, lng: show.lng };
        
        const marker = new this.AdvancedMarkerElement({
          map: this.map,
          position: position,
          title: show.venue,
        });

        marker.addListener('click', () => {
          const infoWindow = new google.maps.InfoWindow({
            content: `<div style="color:black; padding:5px;">
                        <h6 class="fw-bold mb-1">${show.venue}</h6>
                        <p class="small mb-0 text-muted">${show.location}</p>
                      </div>`
          });
          infoWindow.open({ anchor: marker, map: this.map });
        });

        bounds.extend(position);
      }
    });

    if (!bounds.isEmpty()) {
      this.map.fitBounds(bounds);
    }
  }

  buyTicket(show: TourShow): void {
  // Navigate to checkout page and pass the show ID
  this.router.navigate(['/checkout', show.id]);
}

  bookSeat(show: TourShow): void {
  // Navigate to the free registration page
  this.router.navigate(['/register', show.id]);
}

detailsOfShow(show: TourShow) {
  this.router.navigate(['/details', show.id]);
}

  subscribe(): void {
    if (this.email) {
      alert(`Thank you! ${this.email} has been added to our list.`);
      this.email = '';
    }
  }
}