import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrate-jesus',
  imports: [CommonModule],
  templateUrl: './celebrate-jesus.html',
  styleUrl: './celebrate-jesus.css',
})
export class CelebrateJesus {
 
  constructor(private router: Router) {} // Inject Router

  goBack() {
    this.router.navigate(['/ministry']);
  }
}
