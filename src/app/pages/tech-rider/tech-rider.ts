import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tech-rider',
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-rider.html',
  styleUrl: './tech-rider.css',
})
export class TechRider {

  audioSpecs = [
    { item: 'FOH Console', spec: 'Digital (Midas M32, Behringer Wing or equivalent)' },
    { item: 'Monitors', spec: 'Minimum 6 Independent IEM Mixes (Stereo preferred)' },
    { item: 'Microphones', spec: '1x Wireless Beta 58/87 (Lead), 3x SM58 (BV)' },
    { item: 'Instruments', spec: '2x Stereo DI Boxes (Keys), 1x Mono DI (Bass)' }
  ];

  lightingSpecs = [
    { area: 'Front Wash', detail: 'Warm White LED / Tungsten' },
    { area: 'Backlight', detail: 'RGB Moving Heads for atmosphere' },
    { area: 'Atmospheric', detail: 'Haze machine required (No heavy smoke)' }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/about']);
  }

  downloadPDF() {
    // Logic similar to your press kit download
    window.open('assets/PDF/PASCAL_TECH_RIDER.pdf', '_blank');
  }
}
