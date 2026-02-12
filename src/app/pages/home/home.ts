import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Navbar } from "../../navbar/navbar"; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  email: string = '';

  tourDates = [
    { date: 'March 15', venue: 'The Blue Note', location: 'New York, NY', status: 'Available' },
    { date: 'March 22', venue: 'The Fillmore Park', location: 'San Francisco, CA', status: 'Sold Out' },
    { date: 'November 15', venue: 'The Fillmore US', location: 'New York, NY', status: 'Available' }
  ];

  subscribe() {
    if (this.email) {
      alert(`Thanks for subscribing with: ${this.email}`);
      this.email = '';
    }
  }
}
