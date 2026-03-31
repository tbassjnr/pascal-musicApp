import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface BibleVerse {
  reference: string;
  text: string;
  translation_name: string;
}



@Injectable({
  providedIn: 'root',
})
export class BibleAppService {
  private apiUrl = 'https://bible-api.com/';

  constructor(private http: HttpClient) {}

  // Fetch a specific verse (e.g., John 3:16)
  getVerse(reference: string): Observable<BibleVerse> {
    return this.http.get<BibleVerse>(`${this.apiUrl}${reference}`).pipe(
      catchError(() => of({ reference: 'Error', text: 'Scripture not found. Please check your reference.', translation_name: '' }))
    );
  }

  // Fetch a random verse for the "Verse of the Day" feel
  getRandomVerse(): Observable<BibleVerse> {
    const defaultVerses = ['Psalm 23:1', 'Jeremiah 29:11', 'Philippians 4:13', 'John 14:6', 'Romans 8:28'];
    const random = defaultVerses[Math.floor(Math.random() * defaultVerses.length)];
    return this.getVerse(random);
  }
}
