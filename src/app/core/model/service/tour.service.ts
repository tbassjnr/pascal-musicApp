import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TourShow } from '../interface/tour.show';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private shows: TourShow[] = [
    { id: '1', day: '5', month: 'MAR', venue: 'The Blue Note', location: 'New York, NY', status: 'Available', price: 45, isUpcoming: true, dateFull: '', lat: 40.7306, lng: -73.9973 },
    { id: '2', day: '12', month: 'MAR', venue: 'The Town Hall', location: 'New York, NY', status: 'Few Left', price: 55, isUpcoming: true, dateFull: '', lat: 40.7560, lng: -73.9845 },
    { id: '3', day: '20', month: 'MAR', venue: 'Madison Square Garden', location: 'New York, NY', status: 'Sold Out', price: 85, isUpcoming: true, dateFull: '', lat: 40.7505, lng: -73.9934 },
    // ... rest of shows

    // Past Shows
    { id: 'p1', day: '', month: '', venue: 'Madison Square Garden', location: 'New York, NY', status: 'Sold Out', price: 0, isUpcoming: false, dateFull: 'February 14, 2024' },
    { id: 'p2', day: '', month: '', venue: 'Madison Square Garden', location: 'New York, NY', status: 'Sold Out', price: 0, isUpcoming: false, dateFull: 'February 14, 2024' },
    { id: 'p3', day: '', month: '', venue: 'Madison Square Garden', location: 'New York, NY', status: 'Sold Out', price: 0, isUpcoming: false, dateFull: 'February 14, 2024' }
  ];

  getUpcomingShows(): Observable<TourShow[]> {
    return of(this.shows.filter(s => s.isUpcoming));
  }

  getRecentShows(): Observable<TourShow[]> {
    return of(this.shows.filter(s => !s.isUpcoming));
  }
}


