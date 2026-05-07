import { ChangeDetectorRef, Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { TourShow } from '../../core/model/interface/tour.show';
import { interval, Subscription } from 'rxjs';
import { TourService } from '../../core/model/service/tour.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-timer',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-timer.html',
  styleUrl: './event-timer.css',
})
export class EventTimer implements OnInit, OnDestroy {
  // We emit the flyer URL to the Home Page
  @Output() activeEventImage = new EventEmitter<string>();

  nextEvent: TourShow | null = null;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private timerSub?: Subscription;

  constructor(
    private tourService: TourService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.tourService.getUpcomingShows().subscribe(shows => {
      if (shows.length > 0) {
        // Sort to get the absolute nearest upcoming event
        const sortedShows = shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.nextEvent = sortedShows[0];

        // Tell the Home Page to show this flyer
        if (this.nextEvent.ticketImage) {
          this.activeEventImage.emit(this.nextEvent.ticketImage);
        }

        if (isPlatformBrowser(this.platformId)) {
          this.startCountdown();
        }
      } else {
        // No events scheduled, tell Home to use default
        this.activeEventImage.emit(''); 
      }
    });
  }

  startCountdown() {
    this.timerSub = interval(1000).subscribe(() => {
      if (!this.nextEvent) return;

      const now = new Date().getTime();
      const eventDate = new Date(this.nextEvent.date).getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        this.nextEvent = null;
        this.activeEventImage.emit(''); // Reset to default image
        this.timerSub?.unsubscribe();
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
}
