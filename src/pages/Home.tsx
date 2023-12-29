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
    song: "SPICY",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
  {
    song: "SPICY",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
  {
    song: "SPICY",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
    mode: "display",
  },
];

const Home = () => {
  return (
    <>
      <div className="relative">
        {songs.map((s, idx) => {
          return <AlbumCard idx={idx} key={s.song} {...s} />;
        })}
      </div>
    </>
  );
};

export default Home;
