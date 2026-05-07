import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TourShow } from '../interface/tour.show';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private shows: TourShow[] = [
    { 
      id: '1', 
      date: new Date('2026-03-05T20:00:00'), // Set specific date and time
      day: '5', month: 'MAR', venue: 'The Blue Note', 
      location: 'New York, NY', status: 'Available', price: 45, dateFull: 'March 5, 2026',
      ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Pastor Joe Bechem', 'Joe Mettle', 'Cece Twum' ,'Vivian Annan'],
      description: 'An intimate evening of soulful melodies and experimental jazz fusion.'
    },
    { 
      id: '2', 
      date: new Date('2026-03-12T19:30:00'), 
      day: '12', month: 'MAR', venue: 'The Town Hall', 
      location: 'New York, NY', status: 'Few Left', price: 55, dateFull: 'March 12, 2026',
      lat: 40.7812, lng: -73.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Etriakor Charles', 'Joe Mettle','Koda' ,'Vivian Annan'],
      description: 'An encounter night, qworshipping the Marker.'
    },
    { 
      id: '3', 
      date: new Date('2026-03-19T20:30:00'), 
      day: '19', month: 'MAR', venue: 'The Town Hall', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March 12, 2026',
      lat: 40.7812, lng: -73.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Pastor Joe Bechem', 'Joe Mettle', 'Cece Twum' ,'Vivian Annan'],
      description: 'An intimate evening of soulful melodies and experimental jazz fusion.'
    },
    { 
      id: '4', 
      date: new Date('2026-01-01T20:30:00'), 
      day: '01', month: 'JAN', venue: 'Chicago', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March 12, 2026',
      lat: 60.7812, lng: -83.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Etriakor Charles', 'Joe Mettle','Koda' ,'Vivian Annan'],
      description: 'An encounter night, qworshipping the Marker.'
    },
    { 
      id: '5', 
      date: new Date('2025-12-25T20:30:00'), 
      day: '25', month: 'MAR', venue: 'Twin Town', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March 12, 2026',
      lat: 20.7812, lng: -43.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Pastor Joe Bechem', 'Joe Mettle', 'Cece Twum' ,'Vivian Annan'],
      description: 'An intimate evening of soulful melodies and experimental jazz fusion.'
    },
    { 
      id: '6', 
      date: new Date('2026-02-06T20:30:00'), 
      day: '06', month: 'FEB', venue: 'Texas', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March , 2026',
      lat: 40.7812, lng: -53.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Etriakor Charles', 'Joe Mettle','Koda' ,'Vivian Annan'],
      description: 'An encounter night, qworshipping the Marker.'
    },
    // events in the future
    { id: '7', 
      date: new Date('2026-04-25T20:30:00'), 
      day: '25', month: 'APR', venue: 'Central Park Terrace', 
      location: 'New York, NY', status: 'Available', price: 0, dateFull: 'April 25, 2026', 
      lat: 40.7812, lng: -73.9665, isFree: true, isOutgoing: false, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Pastor Joe Bechem', 'Joe Mettle', 'Cece Twum' ,'Vivian Annan'],
      description: 'An intimate evening of soulful melodies and experimental jazz fusion.'
    },
    { 
      id: '8', 
      date: new Date('2026-01-01T20:30:00'), 
      day: '01', month: 'JAN', venue: 'Chicago', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March 12, 2026',
      lat: 60.7812, lng: -83.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Etriakor Charles', 'Joe Mettle','Koda' ,'Vivian Annan'],
      description: 'An encounter night, qworshipping the Marker.'
    },
    { 
      id: '9', 
      date: new Date('2026-01-01T20:30:00'), 
      day: '01', month: 'JAN', venue: 'Chicago', 
      location: 'New York, NY', status: 'Sold Out', price: 55, dateFull: 'March 12, 2026',
      lat: 60.7812, lng: -83.9665, ticketImage: 'assets/images/thyWord.jpg',
      artists: ['Pastor Joe Bechem', 'Joe Mettle', 'Cece Twum' ,'Vivian Annan'],
      description: 'An intimate evening of soulful melodies and experimental jazz fusion.'
    },
    // event
    { 
      id: '10', 
      date: new Date('2026-05-10T18:00:00'), 
      day: '10', month: 'MAY', venue: 'Community Festival', 
      location: 'New Jersey, NJ', status: 'Available', price: 0, 
      isFree: true, ticketImage: 'assets/images/thyWord.jpg',
      isOutgoing: true, // This show will only show "Outgoing Show"
      dateFull: 'May 10, 2026'
    },

    { 
      id: '11', 
      date: new Date('2026-06-10T20:00:00'), 
      day: '10', month: 'JUN', venue: 'Powerhouse Band Festival', 
      location: 'New Jersey, NJ', status: 'Available', price: 0, 
      isFree: true, ticketImage: 'assets/images/powerhouseband.jpg',
      isOutgoing: true, // This show will only show "Outgoing Show"
      dateFull: 'June 10, 2026'
    },
  ];

  getShowById(id: string): TourShow | undefined {
  return this.shows.find(s => s.id === id);
}

  getUpcomingShows(): Observable<TourShow[]> {
    const now = new Date();
    // Return shows where the date is in the future
    return of(this.shows.filter(s => s.date >= now));
  }

  getRecentShows(): Observable<TourShow[]> {
    const now = new Date();
    // Return shows where the date has already passed
    return of(this.shows.filter(s => s.date < now));
  }
}