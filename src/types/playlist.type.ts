interface Image {
  height: number;
  url: string;
  width: number;
}

interface Alb {
  images: Image[];
}

interface Track {
  album: Alb;
  name: string;
}

interface Owner {
  display_name: string;
}

interface SinglePlayListItems {
  tracks: Record<"item", { track: Track }>[];
  name: string;
  description: string;
}

interface UserPlaylistObject {
  images: Image[];
  description: string;
  /** the Spotify ID for the playlist */
  id: string;
  name: string;
  owner: Owner;
}

interface UserPlayLists {
  limit: number;
  total: number;
  offset: number;
  /** next URL to the next page of items. ( null if none)
   * Example: "https://api.spotify.com/v1/me/shows?offset=1&limit=1"  */
  next: string;
  /** URL to the previous page of items. ( null if none)
   * Example: "https://api.spotify.com/v1/me/shows?offset=1&limit=1" */
  previous: string;
  items: UserPlaylistObject[];
}

export type {
  Image,
  Alb,
  Track,
  SinglePlayListItems,
  UserPlaylistObject,
  UserPlayLists,
};
