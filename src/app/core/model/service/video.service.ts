import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, catchError, Observable, of } from 'rxjs';
import { VideoInterface, VideoCategory } from '../interface/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private API_KEY = 'AIzaSyD8J6mqx5Uot4Kr3J2BkF1LztaZnKPEuFk';

  // ✅ Unique YouTube videos only
  private baseVideos: { id: string; youtubeId: string; category: VideoCategory; isFeatured: boolean }[] = [
    { id: '1', youtubeId: 'UZSJ5qxqiE0', category: 'Music Videos', isFeatured: true },
    { id: '2', youtubeId: '8lxJwdmUAvw', category: 'Live Performance', isFeatured: false },
    { id: '3', youtubeId: '9cs8_94s2CU', category: 'Live Performance', isFeatured: false },
    { id: '4', youtubeId: '80ekpSHuLUY', category: 'Music Videos', isFeatured: false },
    { id: '5', youtubeId: 'fYVvO-Vf6aw', category: 'Live Performance', isFeatured: false },
    { id: '6', youtubeId: 'cXGwF6c_1hs', category: 'Music Videos', isFeatured: false },
    { id: '7', youtubeId: 'gO7k0lG7xV4', category: 'Live Performance', isFeatured: false },
    { id: '8', youtubeId: '2cNnIPVeJik', category: 'Live Performance', isFeatured: false },
    { id: '9', youtubeId: 'JEG93YppbDw', category: 'Behind the Scenes', isFeatured: false },
    { id: '10', youtubeId: 'LftpSqbSfts', category: 'Live Performance', isFeatured: false },
    { id: '11', youtubeId: '2uEDIUmoKQA', category: 'Music Videos', isFeatured: false },
    { id: '12', youtubeId: 'yEQq3_1r4SA', category: 'Live Performance', isFeatured: false },
    { id: '13', youtubeId: 'WZbpOYI2CkE', category: 'Music Videos', isFeatured: false },
    { id: '14', youtubeId: 'b9tTjM9-rTs', category: 'Music Videos', isFeatured: false },
    { id: '15', youtubeId: 'UZSJ5qxqiE0', category: 'Music Videos', isFeatured: false },
    { id: '16', youtubeId: 'UFbmMUYifa8', category: 'Music Videos', isFeatured: false},
    { id: '17', youtubeId: 'wGuseM-6FtI', category: 'Music Videos', isFeatured: false},
    { id: '18', youtubeId: 'GqZDgBuIHFw', category: 'Live Performance', isFeatured: false},
    { id: '19', youtubeId: 'xPKmorGraCQ', category: 'Live Performance', isFeatured: false},
    { id: '20', youtubeId: 'kP5qjJU5QC4', category: 'Live Performance', isFeatured: false},
    { id: '21', youtubeId: 'J_h5qYX4T4g', category: 'Music Videos', isFeatured: false},
    { id: '22', youtubeId: 'YPUy4u7Ok-k', category: 'Behind the Scenes', isFeatured: false},
    { id: '23', youtubeId: '7gpDJDrJ8e8', category: 'Behind the Scenes', isFeatured: false},
    { id: '24', youtubeId: 'ZoMtpweP8v4', category: 'Live Performance', isFeatured: false},
    { id: '25', youtubeId: '1JpYQiKDFXc', category: 'Behind the Scenes', isFeatured: false},
    { id: '26', youtubeId: 'xpvculwPzgc', category: 'Live Performance', isFeatured: false},
    { id: '27', youtubeId: 'Gwnzi18_FRU', category: 'Music Videos', isFeatured: false},
    { id: '28', youtubeId: 'pe7o0k-Pzx0', category: 'Live Performance', isFeatured: false},
    { id: '29', youtubeId: 'ZPWPIrSHvIo', category: 'Music Videos', isFeatured: false},
    // { id: '30', youtubeId: '', category: 'Music Videos', isFeatured: false},
    // { id: '31', youtubeId: '', category: 'Music Videos', isFeatured: false},
  ];

  constructor(private http: HttpClient) {}

  getVideos(): Observable<VideoInterface[]> {
    const requests = this.baseVideos.map(video =>
      this.http.get<any>(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${video.youtubeId}&key=${this.API_KEY}`
      ).pipe(
        map(response => {
          // ✅ Check if API returned a valid video
          if (!response.items || !response.items[0]) {
            return {
              ...video,
              title: 'Video not available',
              description: 'This video may be private, removed, or invalid.',
              views: '0',
              duration: '0:00',
              publishedAt: new Date()
            } as VideoInterface;
          }

          const item = response.items[0];
          return {
            ...video,
            title: item.snippet.title,
            description: item.snippet.description,
            views: this.formatViews(item.statistics?.viewCount || '0'),
            duration: this.formatDuration(item.contentDetails?.duration || 'PT0S'),
            publishedAt: new Date(item.snippet.publishedAt)
          } as VideoInterface;
        }),
        catchError(() => of({
          ...video,
          title: 'Video not available',
          description: 'Could not fetch video details due to an error.',
          views: '0',
          duration: '0:00',
          publishedAt: new Date()
        }))
      )
    );

    return forkJoin(requests);
  }

  private formatViews(views: string): string {
    const num = Number(views);
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return views;
  }

  private formatDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = match?.[1] ? match[1] : '0';
    const minutes = match?.[2] ? match[2] : '0';
    const seconds = match?.[3] ? match[3].padStart(2, '0') : '00';

    return hours !== '0' ? `${hours}:${minutes.padStart(2,'0')}:${seconds}` : `${minutes}:${seconds}`;
  }
}
