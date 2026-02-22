import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProtocolPersonnel } from '../interface/protocol.interface';

@Injectable({
  providedIn: 'root',
})
export class ProtocolService {
  
  private team: ProtocolPersonnel[] = [
    {
      id: 1,
      fullName: 'Jonathan Vance',
      role: 'Director of Protocol',
      bio: 'Expert in international diplomatic relations and high-level event coordination.',
      imageUrl: 'assets/images/about.png',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:j.vance@example.com' }
    },
    {
      id: 2,
      fullName: 'Elena Rodriguez',
      role: 'Chief of Logistics',
      bio: 'Specializing in secure transport and seamless guest transitions.',
      imageUrl: 'assets/images/home.png',
      socials: { linkedin: '#', email: 'mailto:e.rod@example.com' }
    },
    {
      id: 3,
      fullName: 'Marcus Thorne',
      role: 'Lead Liaison Officer',
      bio: 'The primary point of contact for VIP guests and visiting dignitaries.',
      imageUrl: 'assets/images/pentecost.jpg',
      socials: { twitter: '#', email: 'mailto:m.thorne@example.com' }
    },
    {
      id: 4,
      fullName: 'Sarah Chen',
      role: 'Hospitality Coordinator',
      bio: 'Ensuring the highest standards of comfort and etiquette are met.',
      imageUrl: 'assets/images/nkunnimBongo.jpg',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:s.chen@example.com' }
    },
    // {
    //   id: 5,
    //   fullName: 'Jonathan Vance',
    //   role: 'Director of Protocol',
    //   bio: 'Expert in international diplomatic relations and high-level event coordination.',
    //   imageUrl: 'assets/images/about.png',
    //   socials: { linkedin: '#', twitter: '#', email: 'mailto:j.vance@example.com' }
    // },
    // {
    //   id: 6,
    //   fullName: 'Elena Rodriguez',
    //   role: 'Chief of Logistics',
    //   bio: 'Specializing in secure transport and seamless guest transitions.',
    //   imageUrl: 'assets/images/home.png',
    //   socials: { linkedin: '#', email: 'mailto:e.rod@example.com' }
    // },
    // {
    //   id: 8,
    //   fullName: 'Marcus Thorne',
    //   role: 'Lead Liaison Officer',
    //   bio: 'The primary point of contact for VIP guests and visiting dignitaries.',
    //   imageUrl: 'assets/images/pentecost.jpg',
    //   socials: { twitter: '#', email: 'mailto:m.thorne@example.com' }
    // },
    // {
    //   id: 4,
    //   fullName: 'Sarah Chen',
    //   role: 'Hospitality Coordinator',
    //   bio: 'Ensuring the highest standards of comfort and etiquette are met.',
    //   imageUrl: 'assets/images/nkunnimBongo.jpg',
    //   socials: { linkedin: '#', twitter: '#', email: 'mailto:s.chen@example.com' }
    // }
  ];

  getProtocolTeam(): Observable<ProtocolPersonnel[]> {
    return of(this.team);
  }
}
