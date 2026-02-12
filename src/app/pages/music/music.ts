import { Component } from '@angular/core';
import { Album, Single, StreamingPlatform } from '../../core/model/interface/music.model';
import { MusicService } from '../../core/model/service/music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.css',
})
export class Music {
  latestAlbum!: Album;
  allAlbums: Album[] = [];

  constructor(private musicService: MusicService) {}

  // Data for the "Listen Everywhere" section
  platforms: StreamingPlatform[] = [
    { name: 'Spotify', iconClass: 'bi-spotify', url: 'https://spotify.com', color: '#1DB954' },
    { name: 'Apple Music', iconClass: 'bi-apple', url: 'https://apple.com', color: '#b5b5b5' },
    { name: 'YouTube', iconClass: 'bi-youtube', url: 'https://youtube.com', color: '#FF0000' },
    { name: 'Audiomack', iconClass: 'bi-cloud-arrow-down-fill', url: 'https://audiomack.com', color: '#1e1e1d' },
    { name: 'Boomplay', iconClass: 'bi-play-circle-fill', url: 'https://boomplay.com', color: '#00D1FF' }
  ];

  

  ngOnInit(): void {
    this.latestAlbum = this.musicService.getLatestAlbum();
    this.allAlbums = this.musicService.getDiscography();
  }

  
}
