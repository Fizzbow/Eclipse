import { useEffect, useState } from "react";
import { AlbumCard, type Album } from "../components/AlbumCard";
import { redirectToAuthCodeFlow } from "../api/spotify/redirectToAuthCodeFlow";
import { getAccessToken } from "../api/spotify/getAccessToken";
import {
  SPOTIFY_ACCESS_TOKEN,
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
  const accessToken = localStorage.getItem(SPOTIFY_ACCESS_TOKEN);

  const verifier = generateCodeVerifier();

  useEffect(() => {
    if (accessToken || !code) return;
    fetchAccessToken(code);
  }, [code]);

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
  async function fetchAccessToken(code: string) {
    const token = await getAccessToken(SPOTIFY_CLIENT_ID, code);

    localStorage.setItem(SPOTIFY_ACCESS_TOKEN, token);
  }

  async function redirect() {
    if (code) return;
    console.log({ code });

    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, verifier);
  }

  async function requestPlayList() {
    if (!playListId || !accessToken) return;
    const playList = await getPlayListItemsAlbum(playListId, accessToken);
    console.log({ playList });
  }

  return (
    <>
      <div className="full flex flex-col">
        <header flex="~ row gap-5">
          get playlist :
          <input
            onChange={(event) => {
              setPlayListId(event.target.value);
            }}
          />
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
