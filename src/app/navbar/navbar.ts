import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/music', label: 'Music' },
    { path: '/video', label: 'Videos' },
    {
      label: 'Team',
      children: [
        { path: '/protocol', label: 'Protocol' },
        { path: '/band', label: 'Band' }
      ]
    },
    { path: '/tour', label: 'Tour' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
}
