import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../core/model/service/video.service';
import { VideoInterface, VideoCategory } from '../../core/model/interface/video.interface';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.html',
  styleUrls: ['./video.css'],
})
export class Video implements OnInit {
  allVideos: VideoInterface[] = [];
  filteredVideos: VideoInterface[] = [];
  featuredVideo?: VideoInterface;
  isLoading = true; // Add this

  activeCategory: VideoCategory = 'All';
  categories: VideoCategory[] = [
    'All',
    'Music Videos',
    'Live Performance',
    'Behind the Scenes',
    'Interviews'
  ];

  hover: boolean = false;
  showPlayer = false;
  selectedVideoUrl?: SafeResourceUrl;
  currentVideo?: VideoInterface;

  constructor(
    private videoService: VideoService,
    public sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef, // Added for manual change detection if needed
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const likedVideos = this.getStoredLikes();

    this.videoService.getVideos().subscribe((videos: VideoInterface[]) => {
      this.allVideos = videos.map(video => ({
        ...video,
        liked: likedVideos.includes(video.youtubeId)
      }));

      this.featuredVideo = this.allVideos.find(v => v.isFeatured);
      this.filterByCategory(this.activeCategory);
      
      this.isLoading = false; // Data is ready, hide spinner
      this.cdr.detectChanges();
    });
  }

  private getStoredLikes(): string[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    try {
      return JSON.parse(localStorage.getItem('likedVideos') || '[]');
    } catch {
      return [];
    }
  }

  filterByCategory(category: VideoCategory): void {
    this.activeCategory = category;
    
    // Logic: If 'All', show all non-featured. Else filter by category and non-featured.
    if (category === 'All') {
      this.filteredVideos = this.allVideos.filter(v => !v.isFeatured);
    } else {
      this.filteredVideos = this.allVideos.filter(v => v.category === category && !v.isFeatured);
    }
  }

  // FIXED: Corrected the YouTube thumbnail URL and template string
  getThumbnail(video?: VideoInterface): string {
    if (!video?.youtubeId) return '';
    return `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  }

  // FIXED: Corrected the YouTube Embed URL template string
  playFeaturedVideo(video: VideoInterface): void {
    if (!video?.youtubeId) return;
    const url = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.currentVideo = video;
    this.showPlayer = true;
  }

  onWatchNow(video: VideoInterface): void {
    if (!video?.youtubeId) return;
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

  onLike(video: VideoInterface): void {
    video.liked = !video.liked;
    if (!isPlatformBrowser(this.platformId)) return;

    let likedVideos = this.getStoredLikes();

    if (video.liked) {
      if (!likedVideos.includes(video.youtubeId)) likedVideos.push(video.youtubeId);
    } else {
      likedVideos = likedVideos.filter(id => id !== video.youtubeId);
    }

    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }

  onShare(video: VideoInterface): void {
    if (!video?.youtubeId) return;
    const videoLink = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    if (isPlatformBrowser(this.platformId) && navigator.share) {
      navigator.share({ title: video.title, text: 'Check out this video!', url: videoLink })
        .catch(err => console.error('Share failed:', err));
    } else if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(videoLink)
        .then(() => alert('Video link copied to clipboard!'))
        .catch(err => console.error('Copy failed:', err));
    }
  }

  onSubscribeYoutube(): void {
    const youtubeChannelUrl = 'https://www.youtube.com/@KelvinTheBra'; // Added placeholder
    if (isPlatformBrowser(this.platformId)) window.open(youtubeChannelUrl, '_blank');
  }

  onNotifications(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!('Notification' in window)) return;

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('🎵 You’re Subscribed!', {
          body: 'You will now receive updates when new videos are released.',
        });
      }
    });
  }
}