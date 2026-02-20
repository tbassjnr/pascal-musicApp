export type ShowStatus = 'Available' | 'Few Left' | 'Sold Out';

export interface TourShow {
  id: string;
  day: string;
  month: string;
  venue: string;
  location: string;
  status: ShowStatus;
  price: number;
  isUpcoming: boolean;
  dateFull: string; // Used for recent shows
}
