import { Injectable } from '@angular/core';
import { Album, Single, StreamingPlatform } from '../interface/music.model';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  
  private discography: Album[] = [
    {
      id: 1,
      title: 'Echoes of Tomorrow',
      year: 2024,
      type: 'Album',
      coverImg: 'assets/images/home.png',
      description: 'A haunting melody that captures the essence of late-night contemplation. This track explores themes of love, loss, and hope.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [
        { id: 1, title: 'Midnight Dreams', duration: '3:45' },
        { id: 2, title: 'Shadow Waltz', duration: '4:12' },
        { id: 3, title: 'Silent Echo', duration: '3:58' },
        { id: 4, title: 'Dance with me', duration: '3:58' },
        { id: 5, title: 'Shy On', duration: '3:58' },
      ]
    },
    {
      id: 2,
      title: 'Midnight Dreams',
      year: 2023,
      type: 'Single',
      coverImg: 'assets/images/home.png',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 1, title: 'Midnight Dreams (Original Mix)', duration: '4:55' }]
    },

    {
      id: 3,
      title: 'Midnight Dreams',
      year: 2023,
      type: 'Single',
      coverImg: 'assets/images/home.png',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 1, title: 'Midnight Dreams (Original Mix)', duration: '4:55' }]
    },

    {
      id: 4,
      title: 'Midnight Dreams',
      year: 2023,
      type: 'Single',
      coverImg: 'assets/images/home.png',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 1, title: 'Midnight Dreams (Original Mix)', duration: '4:55' }]
    }
  ];

  private platforms: StreamingPlatform[] = [
    { name: 'Spotify', iconClass: 'bi-spotify', url: '#', color: '#1DB954' },
    { name: 'Apple Music', iconClass: 'bi-apple', url: '#', color: '#FC3C44' },
    { name: 'YouTube Music', iconClass: 'bi-youtube', url: '#', color: '#FF0000' },
    { name: 'Audiomack', iconClass: 'bi-cloud-fill', url: '#', color: '#FFA200' },
    { name: 'Boomplay', iconClass: 'bi-play-circle-fill', url: '#', color: '#00D1FF' }
  ];

  private singles: Single[] = [
    { id: 1, title: 'Akoma', releaseDate: '2024', coverImg: 'assets/akoma.jpg' },
    { id: 2, title: 'Need You Back', releaseDate: '2024', coverImg: 'assets/need-you.jpg' },
    { id: 3, title: 'My Way', releaseDate: '2024', coverImg: 'assets/my-way.jpg' },
    { id: 4, title: 'Grey', releaseDate: '2023', coverImg: 'assets/grey.jpg' }
  ];

  getPlatforms() { return this.platforms; }
  getLatestSingles() { return this.singles; }
  // ... getAlbums logic here

  getDiscography(): Album[] {
    return this.discography;
  }

  getLatestAlbum(): Album {
    return this.discography[0]; // Returns the first one as latest
  }
}
