import { useEffect, useState } from "react";
import AverageImg from "./AverageImg";
import Dialog from "./Dialog";
import styled from "styled-components";
import "./Album.scss";

const Bg = styled.figure`
  animation: linearZoom 1.5s infinite alternate;
`;

interface Album {
  singer: string;
  album: string;
  albumImg: string;
  song: string;
  mode: "display" | "showLyric";
  angle?: number;
}

const AlbumCard = ({ singer, angle, album, song, albumImg, mode }: Album) => {
  const [primary, setPrimary] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const figure = document.querySelector("figure") as HTMLElement;
    figure.style.background = `linear-gradient(45deg ,${primary} 30%,rgb(255,255,255))`;
  }, [primary]);

  useEffect(() => {
    if (mode === "display") return;
    const AlbumCard = document.querySelector(".AlbumCard") as HTMLElement;
    if (!open) {
      if (AlbumCard.classList.contains("over")) {
        AlbumCard.classList.remove("over");
      }
      return;
    }
    // const foots = document.querySelectorAll(".fonte") as HTMLElement[];
    AlbumCard.classList.add("over");
  }, [open]);
  function handleAlbum() {
    if (mode === "display") return;
    setOpen(!open);
  }

  return (
    <>
      <div
        onClick={() => handleAlbum()}
        className={`AlbumCard m-6  absolute transition-all overflow-hidden  z-1 w-100 h-40 cursor-pointer  flex flex-row items-center   px-5 shadow-md rounded-3`}
        style={{
          boxShadow:
            "rgba(24, 32, 79, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.5) 0px 0px 0px 0.5px inset",
          transform: `rotate(${angle}deg)`,
          transformOrigin: "left bottom",
        }}
      >
        <AverageImg
          setPrimaryColor={(primary) => setPrimary(primary)}
          url={albumImg}
        />

        <Bg className="w-[120%] h-[120%] transition-width transition-hight filter-blur-[60px] absolute left-[30%]  z-[-1]  rounded-[50%] transition-transform"></Bg>
        <div
          className="mask ml-4 my-4 h-26 justify-between  flex-1 transition-transform "
          flex="~ col"
        >
          <div
            style={{ color: `${primary}`, opacity: 0.45 }}
            className="fonte font-900 tracking-widest text-[18px] text-shadow-sm"
            flex="~ row"
          >
            {song}
          </div>
          <div
            flex="~ row"
            className="fonte text-white text-[18px] text-shadow-md w-full "
          >
            {singer}
          </div>
          <div
            className="fonte text-white text-[12px] tridimensional-gradient-text"
            flex="~ row row-reverse"
          >
            {album}
          </div>
        </div>
      </div>
      <Dialog open={open} setOpen={(open) => setOpen(open)} />
    </>
  );
};

export { AlbumCard };
export type { Album };
