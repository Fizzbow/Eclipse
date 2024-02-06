import { useEffect, useState } from "react";
import AverageImg from "./AverageImg";
import Dialog from "./Dialog";
import styled from "styled-components";
import "./Album.scss";

const Bg = styled.span`
  transform: translate(-15%, 0);
`;

interface Album {
  singer: string;
  album: string;
  albumImg: string;
  song: string;
  mode: "display" | "showLyric";
  angle?: number;
}

const AlbumCard = ({ singer, album, song, albumImg, mode }: Album) => {
  const [primary, setPrimary] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const figure = document.querySelector(".figure") as HTMLElement;

    figure.style.background = `radial-gradient(circle,rgba(${primary},1) 0%,
    rgba(${primary},0.7) 40%,
    rgba(${primary},0.5) 60%,
    rgba(${primary},0.2) 90%,
    rgba(${primary},0) 100%)`;
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
        className="AlbumCard m-6 border-2 border-solid 
        border-gray-300
        absolute transition-all overflow-hidden  z-1 w-100 h-40 cursor-pointer  flex flex-row items-center   px-5 shadow-md rounded-4"
        style={{
          boxShadow:
            "rgba(24, 32, 79, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.5) 0px 0px 0px 0.5px inset",
          transformOrigin: "left bottom",
        }}
      >
        <Bg className="figure w-[130%] h-[150%] filter-blur-2xl  transition-width transition-hight  absolute z-[-1]  rounded-[70%] transition-transform"></Bg>
        <div
          className="mask ml-4 my-4 h-26 justify-between  flex-1 transition-transform "
          flex="~ col"
        >
          <span
            className="tracking-widest font-500 text-white text-5 text-shadow-sm"
            flex="~ row"
          >
            {song}
          </span>
          <div flex="~ row" className="fonte text-gray-300 text-sm   w-full">
            {singer}
          </div>
          <div className="fonte text-gray-300 text-sm  " flex="~ row ">
            {album}
          </div>
        </div>

        <AverageImg
          setPrimaryColor={(primary) => setPrimary(primary)}
          url={albumImg}
        />
      </div>
      <Dialog open={open} setOpen={(open) => setOpen(open)} />
    </>
  );
};

export { AlbumCard };
export type { Album };
