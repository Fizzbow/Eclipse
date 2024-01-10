import { useEffect, useState } from "react";
import { AlbumCard, type Album } from "../components/AlbumCard";
import { redirectToAuthCodeFlow } from "../api/spotify/redirectToAuthCodeFlow";
import getAccessToken, { AuthInfo } from "../api/spotify/getAccessToken";
import {
  SPOTIFY_TOKEN,
  SPOTIFY_CLIENT_ID,
} from "../constants/spotify.constants";
import { getPlayListItemsAlbum } from "../api/spotify/getPlaylist";
import { generateCodeVerifier } from "../utils/PKCE";

const songs: Album[] = [
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
  const [playListId, setPlayListId] = useState<string>();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const tokenInfo = localStorage.getItem(SPOTIFY_TOKEN);

  const verifier = generateCodeVerifier();

  useEffect(() => {
    if (tokenInfo || !code) return;

    getAccessToken(SPOTIFY_CLIENT_ID, code);
  }, [code]);

  async function redirect() {
    if (code) return;
    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, verifier);
  }

  async function requestPlayList() {
    if (!playListId || !tokenInfo) return;
    const { access_token } = JSON.parse(tokenInfo) as AuthInfo;
    const playList = await getPlayListItemsAlbum(playListId, access_token);
    console.log({ playList });
  }

  return (
    <>
      <div className="full flex flex-col">
        <header flex="~ row gap-5">
          get playlist :
          <input onChange={(event) => setPlayListId(event.target.value)} />
          <button onClick={() => redirect()}>get code</button>
          {/* <button onClick={() => getToken()}>get accessToken</button> */}
          <button onClick={() => requestPlayList()}>get playList</button>
        </header>
        {/* <div className="relative flex-1 flex flex-center">
          {songs.map((s, idx) => {
            const angle = computedAngle(idx);
            const album = { ...s, angle };
            return <AlbumCard key={s.song} {...album} />;
          })}
        </div> */}
      </div>
    </>
  );
};

export default Home;
