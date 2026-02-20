import { Injectable } from '@angular/core';
import { Album, Single, StreamingPlatform } from '../interface/music.model';

@Injectable({
  providedIn: 'root',
})

export class MusicService {
  
  private discography: Album[] = [
    {
      id: 1,
      title: 'Penti Praise Vol. 1',
      year: 2024,
      type: 'Album',
      coverImg: 'assets/images/home.png',
      description: 'A haunting melody that captures the essence of late-night contemplation. This track explores themes of love, loss, and hope.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [
        { id: 1, title: 'Midnight Dreams', duration: '3:45', previewUrl: 'assets/audios/nkunimBongo.mp3' },
        { id: 2, title: 'Shadow Waltz', duration: '4:12', previewUrl: 'assets/audios/choraleHighlifeMedley.mp3' },
        { id: 3, title: 'Silent Echo', duration: '3:58', previewUrl: 'assets/audios/thyWord.mp3' },
        // ...
      ]

    },
    {
      id: 2,
      title: 'Gratitude Medley Part 1',
      year: 2024,
      type: 'Single',
      coverImg: 'assets/images/gratitude.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 4, title: 'Gratitude Medley Part 1', previewUrl: 'assets/audios/gratitudePart1.mp3', duration: '8:24' }]
    },

    {
      id: 3,
      title: 'Gratitude Medley Part 2',
      year: 2024,
      type: 'Single',
      coverImg: 'assets/images/gratitude.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 5, title: 'Gratitude Medley Part 2', previewUrl: 'assets/audios/gratitudePart2.mp3', duration: '9:29' }]
    },

    {
      id: 4,
      title: 'Thy Word',
      year: 2023,
      type: 'Single',
      coverImg: 'assets/images/thyWord.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 6, title: 'Thy Word', previewUrl: 'assets/audios/thyWord.mp3', duration: '4:17' }]
    },

    {
      id: 5,
      title: 'Hymm Medley',
      year: 2022,
      type: 'Single',
      coverImg: 'assets/images/HymmMedley.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 7, title: 'Hymm Medley', previewUrl: 'assets/audios/hymmMedley.mp3', duration: '9:50' }]
    },

    {
      id: 6,
      title: 'Menkwagyefo',
      year: 2023,
      type: 'Single',
      coverImg: 'assets/images/menkwagyefo.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 8, title: 'Menkwagyefo', previewUrl: 'assets/audios/menkwagyefo.mp3', duration: '9:59' }]
    },

    {
      id: 7,
      title: 'Nkunim Bongo Medley',
      year: 2025,
      type: 'Single',
      coverImg: 'assets/images/nkunnimBongo.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 9, title: 'Nkunim Bongo Medley', previewUrl: 'assets/audios/nkunimBongo.mp3', duration: '13:59' }]
    },

    {
      id: 8,
      title: 'Pentecost',
      year: 2021,
      type: 'Single',
      coverImg: 'assets/images/pentecost.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 10, title: 'Pentecost', previewUrl: 'assets/audios/pentecost.mp3', duration: '7:57' }]
    },

    {
      id: 9,
      title: 'Song Of Hope',
      year: 2025,
      type: 'Single',
      coverImg: 'assets/images/songofhope.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 11, title: 'Song Of Hope', previewUrl: 'assets/audios/songofhope.mp3', duration: '20:09' }]
    },

    {
      id: 10,
      title: 'Spontaneous Worship',
      year: 2024,
      type: 'Single',
      coverImg: 'assets/images/spontaneousWorship.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 12, title: 'Spontaneous Worship', previewUrl: 'assets/audios/spontaneousWorship.mp3', duration: '18:14' }]
    },

    {
      id: 11,
      title: 'Wo Hy3 Me Bo',
      year: 2020,
      type: 'Single',
      coverImg: 'assets/images/wohyemebo.jpg',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 13, title: 'Wo Hy3 Me Bo', previewUrl: 'assets/audios/wohyemebo.mp3', duration: '7:30' }]
    },

    {
      id: 12,
      title: 'Chorale Highlife Medley',
      year: 2023,
      type: 'Single',
      coverImg: '',
      description: 'The breakthrough single that started it all.',
      spotifyUrl: '#',
      appleMusicUrl: '#',
      tracks: [{ id: 14, title: 'Chorale Highlife Medley', previewUrl: 'assets/audios/choraleHighlifeMedley.mp3', duration: '9:36' }]
    }
  ];

  private platforms: StreamingPlatform[] = [
    { name: 'Spotify', iconClass: 'bi-spotify', url: 'https://open.spotify.com/artist/0vBDtQ8ZWHFgmzfQZMm2rd?si=Yk-AWNlgSQKI_29Qq8i10w', color: '#1DB954' },
    { name: 'Apple Music', iconClass: 'bi-apple', url: '#', color: '#c2c0c0' },
    { name: 'YouTube Music', iconClass: 'bi-youtube', url: 'https://www.youtube.com/@pascalkoomson', color: '#FF0000' },
    { name: 'Audiomack', iconClass: 'bi-cloud-fill', url: 'https:www.audiomack.com/PASCAL KOOMSON', color: '#FFA200' },
    { name: 'Boomplay', iconClass: 'bi-play-circle-fill', url: 'https://www.boomplay.com/artists/13280757?from=search&srModel=COPYLINK&srList=WEB&share_content=artist&share_channel=copylink&share_platform=web', color: '#00D1FF' }
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
