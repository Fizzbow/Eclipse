import { AlbumCard, type Album } from "./components/AlbumCard";

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
        return <AlbumCard key={s.song} {...s} />;
      })}
    </>
  );
}

export default App;
