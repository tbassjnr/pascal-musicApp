export type VideoCategory =
  | 'All'
  | 'Music Videos'
  | 'Live Performance'
  | 'Behind the Scenes'
  | 'Interviews';

export interface VideoInterface {
  id: string;
  title?: string;
  // description?: string;
  youtubeId: string;
  views?: string;
  duration?: string;
  category: VideoCategory;
  isFeatured: boolean;
  publishedAt: Date;
  liked?: boolean; // 👈 add this
}
