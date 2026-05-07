import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'; // Added OnInit
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TourService } from '../../core/model/service/tour.service'; // Import Service
import { TourShow } from '../../core/model/interface/tour.show'; // Import Interface
import { Album } from '../../core/model/interface/music.model';
import { MusicService } from '../../core/model/service/music.service';
import { VideoInterface } from '../../core/model/interface/video.interface';
import { VideoService } from '../../core/model/service/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MinistryService } from '../../core/model/service/ministry.service';
import { Bible } from "../../shared/bible/bible";
import { EventTimer } from "../../shared/event-timer/event-timer";

@Component({
  selector: 'app-home',
  standalone: true, // Ensure standalone is set if you're using imports here
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, RouterLink, Bible, EventTimer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  email: string = '';
  tourDates: TourShow[] = [];
  latestAlbum!: Album;
  latestVideo?: VideoInterface; 
  ministryPillars: any[] = [];

  isLoading = true; 
  showPlayer = false;
  selectedVideoUrl?: SafeResourceUrl;
  currentVideo?: VideoInterface;

    // Defaults
    defaultHeroImage = '/assets/images/parcy.jpg';
    currentHeroImage = this.defaultHeroImage;

    // This function is triggered by the shared component
    updateHeroBackground(imageUrl: string) {
      // If child sends an empty string, go back to default
      this.currentHeroImage = imageUrl ? imageUrl : this.defaultHeroImage;
    }

    constructor(
    private tourService: TourService,
    private musicService: MusicService,
    private videoService: VideoService,
    private ministryService: MinistryService,
    public sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
     this.latestAlbum = this.musicService.getLatestAlbum();

    this.tourService.getUpcomingShows().subscribe((tourData) => {
      this.tourDates = tourData.slice(0, 3);
      
      this.videoService.getVideos().subscribe((videoData) => {
      this.latestVideo = videoData[0];
        
        this.isLoading = false; 
        this.cdr.detectChanges(); 
      });
    });

    this.ministryService.getPillars().subscribe(data => {
      this.ministryPillars = data.slice(0, 3);
      this.cdr.detectChanges();
    });

    // Automatically fetch upcoming shows when home page loads
    this.tourService.getUpcomingShows().subscribe((data) => {
      // slice(0, 3) ensures only the first 3 shows appear on Home
      this.tourDates = data.slice(0, 3); 
    });
  }

  // Add navigation logic for the home page cards
  navigateToMinistry(id: string) {
    // Navigate to the specific route like /celebrate-jesus
    window.location.href = '/' + id; 
  }

   // --- PLAYER LOGIC ---
  playVideo(video: VideoInterface): void {
    const url = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.currentVideo = video;
    this.showPlayer = true;
  }

  closePlayer(): void {
    this.showPlayer = false;
    this.selectedVideoUrl = undefined;
    this.currentVideo = undefined;
  }

   // Helper for thumbnails
  getThumbnail(video: VideoInterface): string {
    return `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  }

  subscribe() {
    if (this.email) {
      alert(`Thanks for subscribing with: ${this.email}`);
      this.email = '';
    }
  }
}