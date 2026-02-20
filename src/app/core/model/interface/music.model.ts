// music.model.ts
export interface Track {
  id: number;
  title: string;
  duration: string;
  previewUrl?: string;
  liked?: boolean; // ✅ Add this
}

export interface Album {
  id: number;
  title: string;
  year: number;
  type: 'Album' | 'EP' | 'Single';
  coverImg: string;
  description: string;
  tracks: Track[];
  spotifyUrl: string;
  appleMusicUrl: string;
}

// music.model.ts
export interface StreamingPlatform {
  name: string;
  iconClass: string; // e.g., 'bi-spotify', 'bi-apple'
  url: string;
  color: string;
}

export interface Single {
  id: number;
  title: string;
  releaseDate: string;
  coverImg: string;
}

// ... keep existing Album interface from previous response
