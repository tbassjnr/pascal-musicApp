export type ShowStatus = 'Available' | 'Few Left' | 'Sold Out';

export interface TourShow {
  id: string;
  date: Date; 
  day: string;
  month: string;
  venue: string;
  location: string;
  status: ShowStatus;
  price: number;
  dateFull: string;
  lat?: number;
  lng?: number;
  isFree?: boolean;
  isOutgoing?: boolean;
  ticketImage?: string;
  artists?: string[];
  description?: string; 
}