import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ManagementInterface } from '../../core/model/interface/management.interface';

@Component({
  selector: 'app-management',
  imports: [CommonModule],
  templateUrl: './management.html',
  styleUrl: './management.css',
})
export class Management {

  activeSlide = 0;

  team: ManagementInterface[] = [
    {
      id: 1,
      name: 'Mr George Baidoo',
      role: 'CHAIRMAN / EXECUTIVE PRODUCER (FINANCIER)',
      image: 'assets/images/george.jpg',
      definition: 'Vision driver, chief sponsor, and overall head of the management team.',
      responsibilities: [
        'Provide financial support for recordings, events, tours, and promotions.',
        'Approve major strategic and operational decisions.',
        'Maintain relationships with key partners, sponsors, and media.',
        'Ensure the artiste’s ministry vision aligns with spiritual and business goals.',
        ' Oversee budget allocations and spending approvals.'
      ]
    },
    {
      id: 2,
      name: 'Mr Steve Owusu',
      role: 'ARTISTE MANAGER: (INCLUDING CREATIVE DIRECTOR&PUBLICIST FUNCTIONS)',
      image: 'assets/images/shishiishi.jpg',
      definition: 'Oversees all day-to-day activities, branding, and media presence; acts as the main liaison between the artiste and the outside world.',
      responsibilities: [
        'Coordinate bookings, interviews, appearances, and tours.  ',
        'Negotiate contracts and performance terms.',
        'Develop marketing, publicity, and branding strategies.',
        ' Manage social media, content creation, and online presence.',
        ' Handle media relations, including press releases, interviews, and coverage.',
        'Oversee the artiste’s image, team activities, and guide career decisions and collaborations.'
      ]
    },
    {
      id: 3,
      name: 'Mr Jonathan Cudjoe',
      role: 'TECHNICAL / LOGISTICS / PRODUCTION HEAD',
      image: 'assets/images/thyWord.jpg',
      definition: ' Manages stage, sound, lighting, and other technical needs for events.',
      responsibilities: [
        'Plan and set up stage, sound systems, instruments, and lighting for shows.',
        'Manage rehearsal spaces and technical crew.',
        'Ensure all equipment is functional and transported safely.',
        'Work with the road manager on event day setups and breakdowns.',
        'Coordinate with event organizers technical teams for seamless production.'
      ]
    },
    {
      id: 4,
      name: 'Mr Kofi Nehemiah',
      role: 'ROAD MANAGER',
      image: 'assets/images/pascal1.jpg',
      definition: "Oversees the artiste’s travel arrangements and on-the-road needs.",
      responsibilities: [
        'Handle travel logistics (transportation, accommodation, feeding).',
        'Ensure the artiste is on time for rehearsals, media calls, and performances.',
        ' Manage on-ground challenges during tours and events.',
        'Keep track of performance schedules and ensure smooth movement.',
        'Maintain communication between the artiste and event organizers'
      ]
    },
    {
      id: 5,
      name: 'Mr Psalmist Sam',
      role: 'MUSIC DIRECTOR / BAND LEADER',
      image: 'assets/images/sam.jpg',
      definition: "Oversees musical arrangements and coordinates the band or backing team. ",
      responsibilities: [
        'Arrange music for live performances.',
        'Conduct rehearsals and ensure the team is musically prepared.',
        ' Source and audition new musicians or backing vocalists',
        'Work with the artiste on song selection and medleys for events.',
        'Ensure quality sound and musical excellence during performances.'
      ]
    },
    {
      id: 6,
      name: 'Dr. Koda',
      role: ' SPIRITUAL & WELFARE COORDINATOR',
      image: 'assets/images/pascal1.jpg',
      definition: "Ensures the spiritual and emotional well being of the artiste and team.",
      responsibilities: [
        'Organize prayer meetings, devotionals, and spiritual retreats.',
        'Provide counseling and pastoral support',
        'Handle welfare needs during tours and events.',
        'Keep the team grounded in biblical principles and ministry focus.'
      ]
    },
    {
      id: 7,
      name: 'Dr. Pringle',
      role: 'FINANCE & ACCOUNTS OFFICER',
      image: 'assets/images/pascal1.jpg',
      definition: "Manages the artiste’s income, expenses, and financial records.",
      responsibilities: [
        'Prepare budgets and financial reports.',
        'Manage payments to team members, service providers, and suppliers.',
        ' Source and audition new musicians or backing vocalists',
        'Keep records of all income streams (streams, concerts, royalties, etc.)',
        'Advise on investments and financial sustainability.'
      ]
    },
  ];
constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // Helps refresh UI manually if needed
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Only run this in the browser to avoid SSR errors
    if (isPlatformBrowser(this.platformId)) {
      const carouselEl = document.getElementById('mgmtCarousel');
      
      if (carouselEl) {
        // 'slid.bs.carousel' fires when the slide transition is finished
        carouselEl.addEventListener('slid.bs.carousel', (event: any) => {
          // event.to is a Bootstrap property that gives the index of the new slide
          this.activeSlide = event.to;
          
          // Tell Angular to update the numbers on the screen immediately
          this.cdr.detectChanges();
        });
      }
    }
  }
}
