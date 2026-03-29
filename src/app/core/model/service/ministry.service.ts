import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinistryService {
  
   pillars: any[] = [
    {
      id: 'sing-out-experience', // CHANGED to match app.routes.ts
      title: 'Sing Out Experience',
      description: 'An immersive musical experience that trains and empowers worship leaders while creating a sonic atmosphere for deep intimacy with God.',
      icon: 'bi-mic-fill',
      imageUrl: 'assets/images/songofhope.jpg'
    },
    {
      id: 'choose-jesus-campaign', // CHANGED to match app.routes.ts
      title: 'Choose Jesus Campaign',
      description: 'An evangelistic outreach focused on sharing the Gospel with the unreached, bringing hope to communities through the message of salvation.',
      icon: 'bi-megaphone',
      imageUrl: 'assets/images/HymmMedley.jpg'
    },
    {
      id: 'celebrate-jesus', // Matches path in app.routes.ts
      title: 'Celebrate Jesus',
      description: 'A global worship movement dedicated to exalting Christ through massive gatherings of praise and spiritual renewal.',
      icon: 'bi-stars',
      imageUrl: 'assets/images/thyWord.jpg'
    }
  ];

  getPillars(): Observable<any[]> {
    return of(this.pillars);
  }
}
