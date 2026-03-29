import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MinistryService } from '../../core/model/service/ministry.service';

@Component({
  selector: 'app-ministry',
  imports: [CommonModule,RouterModule],
  templateUrl: './ministry.html',
  styleUrl: './ministry.css',
})
export class Ministry implements OnInit {
  primaryColor = '#198754';
  pillars: any[] = [];

  constructor(private router: Router, private ministryService: MinistryService) {}

  ngOnInit(): void {
    this.ministryService.getPillars().subscribe(data => {
      this.pillars = data;
    });
  }

  navigateToPillar(pillarId: string): void {
    console.log('Navigating to:', pillarId);
    
    this.router.navigate(['/' + pillarId]); 
  }

  giveNow(): void {
  // Navigate to the dedicated giving page
  this.router.navigate(['/give']); 
}

  volunteer(): void {
  // Navigate to the dedicated volunteering registration page
  this.router.navigate(['/volunteer']); 
}
}
