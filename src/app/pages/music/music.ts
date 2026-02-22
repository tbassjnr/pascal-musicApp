import { Component, OnInit, AfterViewInit, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { Album, StreamingPlatform, Track } from '../../core/model/interface/music.model';
import { MusicService } from '../../core/model/service/music.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrls: ['./music.css'], // ✅ Fixed
})

export class Music implements OnInit, AfterViewInit {

  latestAlbum!: Album;
  allAlbums: Album[] = [];
  platforms: StreamingPlatform[] = [];

  // Track selection modal
selectedAlbumForShare?: Album;
selectedAlbumForLike?: Album;

  // 🔊 Audio State
  audio!: HTMLAudioElement;
  currentTrack?: Track;
  isPlaying = false;

  // ⏱ Time Tracking
  currentTime = 0;
  duration = 0;

  constructor(
  private musicService: MusicService,
  private cdr: ChangeDetectorRef,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

  isAlbumLiked(album: Album): boolean {
  return album.tracks.some(track => track.liked);
}

  // ===============================
  // INIT
  // ===============================
  ngOnInit(): void {
    this.latestAlbum = this.musicService.getLatestAlbum();
    this.allAlbums = this.musicService.getDiscography();
    this.platforms = this.musicService.getPlatforms();

    if (isPlatformBrowser(this.platformId)) {

  const likedTracks = this.getStoredLikes();

  this.allAlbums.forEach(album => {
    album.tracks.forEach(track => {
      track.liked = likedTracks.includes(track.id);
    });
  });

}
  }

  

  ngAfterViewInit(): void {
    if (typeof Audio !== 'undefined') {
      this.audio = new Audio();

      // 🔥 Track progress in real time
      this.audio.ontimeupdate = () => {
        this.currentTime = this.audio.currentTime;
        this.duration = this.audio.duration || 0;
        this.cdr.detectChanges(); // 🔥 Force Angular to update UI
      };

      // 🔥 When song ends
      this.audio.onended = () => {
        this.isPlaying = false;
        this.currentTrack = undefined;
        this.currentTime = 0;
        this.duration = 0;
        this.cdr.detectChanges();
      };

      window.addEventListener('beforeunload', () => this.stopAudio());
    }
  }

  // ===============================
  // PLAY / PAUSE
  // ===============================
  playTrack(track: Track, previewUrl: string) {

    if (!this.audio || !previewUrl) return;

    // 🎵 If new track selected
    if (this.currentTrack?.previewUrl !== previewUrl) {

      // Stop previous track
      this.audio.pause();
      this.audio.currentTime = 0;

      // Update UI immediately
      this.currentTrack = track;
      this.isPlaying = true;
      this.currentTime = 0;
      this.duration = 0;

      // Load new audio
      this.audio.src = previewUrl;
      this.audio.load();

      this.audio.play().catch(err => {
        console.error(err);
        this.isPlaying = false;
      });

    } else {
      // 🔁 Toggle play/pause
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
      } else {
        this.audio.play();
        this.isPlaying = true;
      }
    }
  }

  // ===============================
  // FORMAT TIME
  // ===============================
  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }

  // ===============================
  // STOP AUDIO
  // ===============================
  stopAudio() {
    if (!this.audio) return;

    this.audio.pause();
    this.audio.currentTime = 0;

    this.isPlaying = false;
    this.currentTrack = undefined;
    this.currentTime = 0;
    this.duration = 0;
  }

  // ===============================
  // link Sharing
  // ===============================
  onShare(album: Album): void {

  if (!album?.tracks?.length) return;

  // ✅ If only one track → share directly
  if (album.tracks.length === 1) {
    this.shareTrack(album.tracks[0]);
    return;
  }

  // ✅ If multiple tracks → open selection modal
  this.selectedAlbumForShare = album;

  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
  }
}

shareTrack(track: Track): void {

  if (!track?.previewUrl) return;

  const audioLink = `${window.location.origin}/${track.previewUrl}`;

  if (navigator.share) {
    navigator.share({
      title: track.title,
      text: `Listen to "${track.title}"`,
      url: audioLink
    }).catch(err => console.error('Share failed:', err));
  } else {
    navigator.clipboard.writeText(audioLink)
      .then(() => alert('Audio link copied to clipboard!'))
      .catch(err => console.error('Copy failed:', err));
  }

  this.closeModal();
}

closeModal(): void {
  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
  }

  this.selectedAlbumForShare = undefined;
}

// ===============================
// GET STORED LIKES
// ===============================
getStoredLikes(): number[] {

  if (!isPlatformBrowser(this.platformId)) return [];

  const stored = localStorage.getItem('likedTracks');
  return stored ? JSON.parse(stored) : [];
}

// ===============================
// SAVE STORED LIKES
// ===============================
saveLikes(likes: number[]): void {

  if (!isPlatformBrowser(this.platformId)) return;

  localStorage.setItem('likedTracks', JSON.stringify(likes));
}


  // ===============================
  // Like 
  // ===============================
  onLike(album: Album): void {

  if (!album?.tracks?.length) return;

  // ✅ If only one track → like immediately
  if (album.tracks.length === 1) {
    this.toggleTrackLike(album.tracks[0]);
    return;
  }

  // ✅ If multiple tracks → open selection modal
  this.selectedAlbumForLike = album;

  const modal = document.getElementById('likeModal');
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
  }
}


toggleTrackLike(track: Track): void {

  track.liked = !track.liked;

  if (!isPlatformBrowser(this.platformId)) return;

  let likedTracks = this.getStoredLikes();

  if (track.liked) {
    if (!likedTracks.includes(track.id)) {
      likedTracks.push(track.id);
    }
  } else {
    likedTracks = likedTracks.filter(id => id !== track.id);
  }

  this.saveLikes(likedTracks);

  this.closeLikeModal();
}

closeLikeModal(): void {
  const modal = document.getElementById('likeModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }

  this.selectedAlbumForLike = undefined;
}

}
