export interface Invader {
  id: string;
  city: string;
  points?: 10 | 20 | 30 | 40 | 50 | 100 ;
  status?: 0 | 1 | 2 | 3 | 4 | 5 ;
  latitude?: number;
  longitude?: number;
  gMapsUrl?: string;
  location?: string;
}
