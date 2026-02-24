import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { TourService } from '../../core/model/service/tour.service';
import { TourShow } from '../../core/model/interface/tour.show';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule,FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit{
  show?: TourShow;
  purchaserName: string = '';
  seatNumber: string = 'A-' + Math.floor(Math.random() * 100); // Mock random seat
  paymentMethod: string = 'Credit Card';
  
  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.show = this.tourService.getShowById(id);
    }
  }

  confirmPurchase(type: 'email' | 'sms'): void {
    if (!this.purchaserName) {
      alert('Please enter your name.');
      return;
    }

    const details = `
      Ticket Confirmed!
      Name: ${this.purchaserName}
      Venue: ${this.show?.venue}
      Seat: ${this.seatNumber}
      Total Paid: $${this.show?.price}
    `;

    alert(`Sending details via ${type.toUpperCase()}...\n${details}`);
    this.router.navigate(['/tour']); // Go back after purchase
  }

  goToTour() {
  this.router.navigate(['/tour']);
}

}
