import { AlbumCard, Album } from "./components/AlbumCard";

const songs: Album[] = [
  {
    song: "SPICY",
    singer: "aespa",
    albumImg:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
    album: "MYWORLD - The 3rd Mini Album",
  },
];

function App() {
  return (
    <>
      {songs.map((s) => {
        const { song, singer, albumImg, album } = s;
        return (
          <AlbumCard
            key={song}
            song={song}
            album={album}
            singer={singer}
            albumImg={albumImg}
          />
        );
      })}
    </>
  );
}

export default App;
