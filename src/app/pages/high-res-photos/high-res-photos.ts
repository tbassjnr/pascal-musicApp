import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Photo } from '../../core/model/interface/high-res-photo';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-high-res-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './high-res-photos.html',
  styleUrl: './high-res-photos.css',
})
export class HighResPhotos {

   activeCategory = 'All';
  categories = ['All', 'Portraits', 'Events', 'Ministry'];

  photos = [
    { title: 'Worship Lead', cat: 'Events', url: 'assets/images/pascal1.jpg', size: '2.4MB' },
    { title: 'Official 2024', cat: 'Portraits', url: 'assets/images/pascal1.jpg', size: '5.1MB' },
    { title: 'Global Outreach', cat: 'Ministry', url: 'assets/images/gratitude.jpg', size: '3.8MB' },
    { title: 'Sing Out Exp', cat: 'Events', url: 'assets/images/songofhope.jpg', size: '4.2MB' },
    { title: 'Studio Session', cat: 'Portraits', url: 'assets/images/pascal1.jpg', size: '1.9MB' },
    { title: 'Prayer Meeting', cat: 'Ministry', url: 'assets/images/thyWord.jpg', size: '6.0MB' },
  ];

  filteredPhotos = this.photos;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  filter(cat: string) {
    this.activeCategory = cat;
    this.filteredPhotos = cat === 'All' ? this.photos : this.photos.filter(p => p.cat === cat);
  }

  download(photo: any) {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = photo.url;
      link.download = `${photo.title}.jpg`;
      link.click();
    }
  }

  goBack() { this.router.navigate(['/about']); }
}
