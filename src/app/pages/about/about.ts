import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  stats = [
    { value: '5M+', label: 'Monthly Listeners' },
    { value: '500K+', label: 'Album Sales' },
    { value: '50+', label: 'Live Shows' },
    { value: '15', label: 'Music Awards' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject Platform ID for SSR safety
  ){}

  timeline = [
    {
      year: '2024',
      title: 'Echoes of Tomorrow Album Release',
      description: 'Released my most ambitious album yet, exploring themes of hope and resilience in modern times.',
      side: 'left'
    },
    {
      year: '2023',
      title: 'Sold Out National Tour',
      description: 'Released my most ambitious album yet, exploring themes of hope and resilience in modern times.',
      side: 'right'
    },
    {
      year: '2022',
      title: 'Grammy Nomination',
      description: 'Released my most ambitious album yet, exploring themes of hope and resilience in modern times.',
      side: 'left'
    },
    {
      year: '2021',
      title: 'Breakthrough Single',
      description: 'Released my most ambitious album yet, exploring themes of hope and resilience in modern times.',
      side: 'right'
    },
    {
      year: '2020',
      title: 'First Album Release',
      description: 'Released my most ambitious album yet, exploring themes of hope and resilience in modern times.',
      side: 'left'
    }
  ];

  influences = Array(12).fill({ name: 'Bob Dylan' });

   downloadPressKit() {
    // 1. Only run this in the browser
    if (isPlatformBrowser(this.platformId)) {
      console.log('Downloading Press Kit...');

      // 2. Define the path to your file in the assets folder
      const filePath = 'assets/PDF/PASCAL_KOOMSON_MINISTIRES.pdf`'; 
      const fileName = 'PASCAL_KOOMSON_MINISTIRES.pdf';

      // 3. Create a hidden anchor element
      const link = document.createElement('a');
      link.href = filePath;
      link.download = fileName; // This attribute forces the download

      // 4. Append to body, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  contactManagement() {
    console.log('Navigating to contact...');
    this.router.navigate(['/management']);
  }
}
