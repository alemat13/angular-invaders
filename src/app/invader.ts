export interface Invader {
  id: string;
  city: string;
  points?: number;
  status?: 0 | 1 | 2 | 3 | 4 | 5;
  latitude?: number;
  longitude?: number;
  gMapsUrl?: string;
  location?: string;
}
