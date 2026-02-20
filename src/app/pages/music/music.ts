import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Album, StreamingPlatform, Track } from '../../core/model/interface/music.model';
import { MusicService } from '../../core/model/service/music.service';
import { CommonModule } from '@angular/common';

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

  // 🔊 Audio State
  audio!: HTMLAudioElement;
  currentTrack?: Track;
  isPlaying = false;

  // ⏱ Time Tracking
  currentTime = 0;
  duration = 0;

  constructor(private musicService: MusicService, private cdr: ChangeDetectorRef) {}

  // ===============================
  // INIT
  // ===============================
  ngOnInit(): void {
    this.latestAlbum = this.musicService.getLatestAlbum();
    this.allAlbums = this.musicService.getDiscography();
    this.platforms = this.musicService.getPlatforms();
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
}
