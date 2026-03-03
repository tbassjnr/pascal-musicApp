import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-singout-experience',
  imports: [CommonModule],
  templateUrl: './singout-experience.html',
  styleUrl: './singout-experience.css',
})
export class SingoutExperience {

  constructor(private router: Router) {} // Inject Router

  goBack() {
    this.router.navigate(['/ministry']);
  }
}
