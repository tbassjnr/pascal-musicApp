import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-biography',
  imports: [CommonModule, RouterModule],
  templateUrl: './biography.html',
  styleUrl: './biography.css',
})
export class Biography {

  constructor(private router: Router) {}

  // Quick Facts Data
  quickFacts = [
    { label: 'Full Name', value: 'Pascal Koomson' },
    { label: 'Origin', value: 'Ghana, West Africa' },
    { label: 'Genres', value: 'Contemporary Gospel, African Praise' },
    { label: 'Instruments', value: 'Vocals, Acoustic Guitar, Piano' },
    { label: 'Years Active', value: '2015 – Present' },
    { label: 'Ministry Core', value: 'Spiritual Renewal & Worship' }
  ];

  // Milestone Data
  milestones = [
    { year: '2018', event: 'Launched "Celebrate Jesus" Global Movement' },
    { year: '2020', event: 'Released "Thy Word" – Award-winning single' },
    { year: '2023', event: 'National Tour across 12 Major Cities' },
    { year: '2024', event: 'Penti Praise Vol. 1 reaches 1M+ Streams' }
  ];

  goBack() {
    this.router.navigate(['/about']);
  }
}
