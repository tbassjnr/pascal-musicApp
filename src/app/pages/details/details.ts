import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TourService } from '../../core/model/service/tour.service';
import { TourShow } from '../../core/model/interface/tour.show';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit{


  show?: TourShow;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.show = this.tourService.getShowById(id);
    }
  }

  /**
   * Navigates the user to the correct booking page based on show type
   */
  proceedToBooking(): void {
    if (!this.show) return;

    // ADDED GUARD: Prevent navigation if the show is outgoing
    if (this.show.isFree && this.show.isOutgoing) {
      return; 
    }

    if (this.show.isFree) {
      this.router.navigate(['/register', this.show.id]);
    } else {
      this.router.navigate(['/checkout', this.show.id]);
    }
  }

  goBack() {
    this.router.navigate(['/tour']);
  }
}
