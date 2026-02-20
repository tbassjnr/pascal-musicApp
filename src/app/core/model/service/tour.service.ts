import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TourShow } from '../interface/tour.show';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private shows: TourShow[] = [
    { id: '1', day: '5', month: 'MAR', venue: 'The Blue Note', location: 'New York, NY • USA', status: 'Available', price: 45, isUpcoming: true, dateFull: '' },
    { id: '2', day: '6', month: 'MAR', venue: 'The Blue Note', location: 'New York, NY • USA', status: 'Few Left', price: 45, isUpcoming: true, dateFull: '' },
    { id: '3', day: '7', month: 'MAR', venue: 'The Blue Note', location: 'New York, NY • USA', status: 'Sold Out', price: 45, isUpcoming: true, dateFull: '' },
    { id: '4', day: '9', month: 'MAR', venue: 'The Blue Note', location: 'New York, NY • USA', status: 'Few Left', price: 45, isUpcoming: true, dateFull: '' },
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