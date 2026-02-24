import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TourService } from '../../core/model/service/tour.service';
import { TourShow } from '../../core/model/interface/tour.show';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit{

  show?: TourShow;
  purchaserName: string = '';
  seatNumber: string = '';
  isSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.show = this.tourService.getShowById(id);
    }
  }

  sendConfirmation(): void {
    if (!this.purchaserName || !this.seatNumber) {
      alert('Please fill in all details.');
      return;
    }

    // Logic to simulate sending Email/SMS
    const details = `
      Show: ${this.show?.venue}
      Name: ${this.purchaserName}
      Seat: ${this.seatNumber}
      Cost: FREE
    `;
    
    alert(`Registration Successful!\n\nA confirmation has been sent to your Email and SMS with the following details:\n${details}`);
    this.isSubmitted = true;
  }
}
