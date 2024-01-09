import { useEffect, useState } from "react";
import { AlbumCard, type Album } from "../components/AlbumCard";
import { redirectToAuthCodeFlow } from "../api/spotify/redirectToAuthCodeFlow";
import { getAccessToken } from "../api/spotify/getAccessToken";
import { SPOTIFY_CLIENT_ID } from "../constants/spotify.constants";
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
  const [code, setCode] = useState<string | null>();

  const verifier = generateCodeVerifier();
  // const co_ver = localStorage.getItem("code_verifier");

  useEffect(() => {}, []);
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

  async function redirec() {
    const urlParams = new URLSearchParams(window.location.search);
    const co = urlParams.get("code");
    if (co) return;
    console.log({ co });

    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, verifier);

    // if (!playListId || !co) return;
    // const token = await getAccessToken(SPOTIFY_CLIENT_ID, co);
    // const res = await getPlayListItemsAlbum(playListId);
    // console.log({ res });
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
          <button onClick={() => redirec()}>get code</button>
          <button>get accessToken</button>
          <button>get playList</button>
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
