import { Image } from ".";

export interface Profile {
  country: string;
  display_name: string;
  email: string;
  images: Image[];
}
