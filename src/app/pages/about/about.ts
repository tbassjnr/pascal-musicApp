import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    console.log('Downloading Press Kit...');
    // Logic for downloading file
  }

  contactManagement() {
    console.log('Navigating to contact...');
    // Logic to scroll to contact or navigate
  }
}
