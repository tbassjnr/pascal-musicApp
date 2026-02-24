import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Added OnInit
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TourService } from '../../core/model/service/tour.service'; // Import Service
import { TourShow } from '../../core/model/interface/tour.show'; // Import Interface

@Component({
  selector: 'app-home',
  standalone: true, // Ensure standalone is set if you're using imports here
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  email: string = '';
  tourDates: TourShow[] = []; // Change type to TourShow interface

  constructor(private tourService: TourService) {} // Inject the service

  ngOnInit(): void {
    // Automatically fetch upcoming shows when home page loads
    this.tourService.getUpcomingShows().subscribe((data) => {
      // slice(0, 3) ensures only the first 3 shows appear on Home
      this.tourDates = data.slice(0, 3); 
    });
  }

  subscribe() {
    if (this.email) {
      alert(`Thanks for subscribing with: ${this.email}`);
      this.email = '';
    }
  }
}