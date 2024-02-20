import { Image } from ".";

export interface Profile {
  country: string;
  display_name: string;
  email: string;
  images: Image[];
  /** The Spotify user ID for this user. */
  id: string;
  product: string;
}
