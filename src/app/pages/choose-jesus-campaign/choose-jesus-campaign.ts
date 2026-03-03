import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-jesus-campaign',
  imports: [CommonModule],
  templateUrl: './choose-jesus-campaign.html',
  styleUrl: './choose-jesus-campaign.css',
})
export class ChooseJesusCampaign {

  constructor(private router: Router) {} // Inject Router

  goBack() {
    this.router.navigate(['/ministry']);
  }
}
