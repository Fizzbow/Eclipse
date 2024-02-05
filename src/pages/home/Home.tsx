import { useEffect, useState } from "react";
import { AlbumCard, type Album } from "../../components/AlbumCard";

import getAccessToken from "../../api/spotify/account/getAccessToken";
import {
  SPOTIFY_TOKEN,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CODE,
} from "../../constants/spotify.constants";
import { getPlayListItemsAlbum } from "../../api/spotify/getPlaylist";
import { AuthorizationInfo } from "../../types/account.type";
import Header from "../../components/Header";

// const songs: Album[] = [
//   {
//     song: "SPICY",
//     singer: "aespa",
//     albumImg:
//       "https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png",
//     album: "MYWORLD - The 3rd Mini Album",
//     mode: "display",
//   },
// ];

const Home = () => {
  const [playListId, setPlayListId] = useState<string>();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const tokenInfo = localStorage.getItem(SPOTIFY_TOKEN);

  useEffect(() => {
    if (!code) return;
    localStorage.setItem(SPOTIFY_CODE, code);
  }, [code]);

  // async function redirect() {
  //   if (code) return;
  //   redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, verifier);
  // }

  function requestPlayList() {
    if (!tokenInfo) {
      getAccessToken(SPOTIFY_CLIENT_ID);
    } else {
      getAccessToken(SPOTIFY_CLIENT_ID, true);
    }

    setTimeout(async () => {
      if (!playListId || !tokenInfo) return;
      const { access_token } = JSON.parse(tokenInfo) as AuthorizationInfo;
      const playList = await getPlayListItemsAlbum(playListId, access_token);
      console.log({ playList });
    }, 100);
  }

  return (
    <main className="full flex flex-col p-4">
      <Header />
      <header flex="~ row gap-5">
        get playlist :
        <input onChange={(event) => setPlayListId(event.target.value)} />
        <button onClick={() => requestPlayList()}>get playList</button>
      </header>
      {/* <div className="relative flex-1 flex flex-center">
          {songs.map((s, idx) => {
            const angle = computedAngle(idx);
            const album = { ...s, angle };
            return <AlbumCard key={s.song} {...album} />;
          })}
        </div> */}
    </main>
  );
};

export default Home;
