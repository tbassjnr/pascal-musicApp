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
      name: 'Dr. Archibald Mensah',
      role: 'Operations Director',
      image: 'assets/images/about.png',
      definition: 'Architect of ministry logistics and global administrative infrastructure. Ensuring the core message is delivered with world-class operational standards.',
      responsibilities: [
        'Strategic oversight of international ministry expansions',
        'Directing administrative excellence across all departments',
        'Managing high-level stakeholder and donor relations',
        'Financial stewardship for large-scale crusade events'
      ]
    },
    {
      id: 2,
      name: 'Dr. Hamidu Abdulai',
      role: 'Roadshow Director',
      image: 'assets/images/Pascal.jpg',
      definition: 'Architect of ministry logistics and global administrative infrastructure. Ensuring the core message is delivered with world-class operational standards.',
      responsibilities: [
        'Strategic oversight of international ministry expansions',
        'Directing administrative excellence across all departments',
        'Managing high-level stakeholder and donor relations',
        'Financial stewardship for large-scale crusade events'
      ]
    },
    {
      id: 3,
      name: 'Ing. Cecelia Twum',
      role: 'Creative Director',
      image: 'assets/images/thyWord.jpg',
      definition: 'Architect of ministry logistics and global administrative infrastructure. Ensuring the core message is delivered with world-class operational standards.',
      responsibilities: [
        'Strategic oversight of international ministry expansions',
        'Directing administrative excellence across all departments',
        'Managing high-level stakeholder and donor relations',
        'Financial stewardship for large-scale crusade events'
      ]
    },
    {
      id: 4,
      name: 'Dr. Pringle Koda',
      role: 'Logistics Director',
      image: 'assets/images/pascal1.jpg',
      definition: 'Architect of ministry logistics and global administrative infrastructure. Ensuring the core message is delivered with world-class operational standards.',
      responsibilities: [
        'Strategic oversight of international ministry expansions',
        'Directing administrative excellence across all departments',
        'Managing high-level stakeholder and donor relations',
        'Financial stewardship for large-scale crusade events'
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
