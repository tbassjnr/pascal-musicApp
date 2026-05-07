import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { Bible } from "./shared/bible/bible";
import { EventTimer } from "./shared/event-timer/event-timer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, RouterOutlet, CommonModule, RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('pascal-musicApp');
}
