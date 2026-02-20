import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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

  // ✅ Add currentVideo to track which video is playing
  currentVideo?: VideoInterface;

  constructor(
    private videoService: VideoService,
    public sanitizer: DomSanitizer,
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
    this.filteredVideos =
      category === 'All'
        ? this.allVideos.filter(v => !v.isFeatured)
        : this.allVideos.filter(v => v.category === category && !v.isFeatured);
  }

  getThumbnail(video?: VideoInterface): string {
    return video?.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : '';
  }

  // ===============================
  // PLAY VIDEO (updated)
  // ===============================
  playFeaturedVideo(video: VideoInterface): void {
    if (!video?.youtubeId) return;

    const url = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.currentVideo = video; // <-- track current video
    this.showPlayer = true;
  }

  onWatchNow(video: VideoInterface): void {
    if (!video?.youtubeId) return;

    const url = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.currentVideo = video; // <-- track current video
    this.showPlayer = true;
  }

  closePlayer(): void {
    this.showPlayer = false;
    this.selectedVideoUrl = undefined;
    this.currentVideo = undefined; // <-- reset current video
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
    const youtubeChannelUrl = 'https://www.youtube.com/channel/UCDtgqMENud-XZOxKEhp82fA?sub_confirmation=1';
    if (isPlatformBrowser(this.platformId)) window.open(youtubeChannelUrl, '_blank');
  }

  private showWelcomeNotification(): void {
    new Notification('🎵 You’re Subscribed!', {
      body: 'You will now receive updates when new videos are released.',
      icon: '/assets/logo.png'
    });
  }

  onNotifications(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!('Notification' in window)) {
      alert('This browser does not support notifications.');
      return;
    }

    if (Notification.permission === 'granted') {
      this.showWelcomeNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') this.showWelcomeNotification();
      });
    } else {
      alert('Notifications are blocked. Please enable them in your browser settings.');
    }
  }
}
