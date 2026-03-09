import { CommonModule, isPlatformBrowser} from '@angular/common'; 
import { Component, Inject, PLATFORM_ID } from '@angular/core'; 
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

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
    { path: '/ministry', label: 'Ministry' },
    {
      label: 'Team',
      children: [
        { path: '/management', label: 'Management' },
        { path: '/protocol', label: 'Protocol' },
        { path: '/band', label: 'Band' }
      ]
    },
    { path: '/tour', label: 'Tour' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  constructor(
  private router: Router,
  @Inject(PLATFORM_ID) private platformId: Object
) {

  this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
}

  closeMenu() {
  if (isPlatformBrowser(this.platformId)) {
    const menu = document.getElementById('navbarNav');
    menu?.classList.remove('show');
  }
}
}
