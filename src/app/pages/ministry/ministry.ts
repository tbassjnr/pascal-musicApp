import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ministry',
  imports: [CommonModule,RouterModule],
  templateUrl: './ministry.html',
  styleUrl: './ministry.css',
})
export class Ministry implements OnInit {
  primaryColor = '#198754';

  pillars: any[] = [
    {
      id: 'celebrate-jesus', // Matches path in app.routes.ts
      title: 'Celebrate Jesus',
      description: 'A global worship movement dedicated to exalting Christ through massive gatherings of praise and spiritual renewal.',
      icon: 'bi-stars',
      imageUrl: 'assets/images/thyWord.jpg'
    },
    {
      id: 'choose-jesus-campaign', // CHANGED to match app.routes.ts
      title: 'Choose Jesus Campaign',
      description: 'An evangelistic outreach focused on sharing the Gospel with the unreached, bringing hope to communities through the message of salvation.',
      icon: 'bi-megaphone',
      imageUrl: 'assets/images/HymmMedley.jpg'
    },
    {
      id: 'sing-out-experience', // CHANGED to match app.routes.ts
      title: 'Sing Out Experience',
      description: 'An immersive musical experience that trains and empowers worship leaders while creating a sonic atmosphere for deep intimacy with God.',
      icon: 'bi-mic-fill',
      imageUrl: 'assets/images/songofhope.jpg'
    }
  ];

   constructor(private router: Router) {} 

  ngOnInit(): void {}

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
