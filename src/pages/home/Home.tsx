import { useEffect, useState } from "react";
import { AlbumCard, type Album } from "../../components/AlbumCard";

import { SPOTIFY_CODE } from "../../constants/spotify.constants";

const songs = [
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
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  useEffect(() => {
    if (!code) return;
    localStorage.setItem(SPOTIFY_CODE, code);
  }, [code]);

  // async function redirect() {
  //   if (code) return;
  //   redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, verifier);
  // }

  return (
    <main className="full flex flex-col">
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex-1 flex  flex-center transform"
      >
        {songs.map((s) => {
          const album = { ...s };
          return <AlbumCard key={s.song} {...album} />;
        })}
      </div>
    </main>
  );
};

export default Home;
