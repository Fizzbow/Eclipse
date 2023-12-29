import { AlbumCard, type Album } from "../components/AlbumCard";

const songs: Album[] = [
  {
    song: "SPICY",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
  {
    song: "Thirsty",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
  {
    song: "sdasdaw",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
];

const Home = () => {
  function computedAngle(idx: number): number {
    const len = songs.length;

    const angleObj = {
      start: 360,
      end: 180,
    };

    if (len <= 1 || idx === undefined) return 0;
    if (len < 7) {
      angleObj.start = angleObj.start - 20;
      angleObj.end = angleObj.end + 20;
    }

    if (len > 7 && len < 15) {
      angleObj.start = angleObj.start - 20;
      angleObj.end = angleObj.end - 20;
    }

    const total = angleObj.start - angleObj.end;
    const gap = total / len;

    const currAngle = angleObj.start - idx * gap;

    return currAngle;
  }

  return (
    <>
      <div className="relative full flex-center">
        {songs.map((s, idx) => {
          const angle = computedAngle(idx);
          const album = { ...s, angle };
          return <AlbumCard key={s.song} {...album} />;
        })}
      </div>
    </>
  );
};

export default Home;
