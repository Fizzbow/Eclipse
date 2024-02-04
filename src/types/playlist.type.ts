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

interface PlayList {
  // tracks: {
  //   items: {
  //     track: Track;
  //   }[];
  // };

  tracks: Record<"item", { track: Track }>[];
  name: string;
  description: string;
}

export type { Image, Alb, Track, PlayList };
