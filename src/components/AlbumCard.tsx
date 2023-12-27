import { useEffect, useState } from "react";
import AverageImg from "./AverageImg";
import Dialog from "./Dialog";
import styled from "styled-components";
import "./Album.scss";

const Bg = styled.figure`
  animation: leftToRight 4s infinite alternate;
`;

const AlbumCard = () => {
  const [primary, setPrimary] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const figure = document.querySelector("figure") as HTMLElement;
    figure.style.background = `linear-gradient(45deg ,${primary} 30%,rgb(255,255,255))`;
  }, [primary]);

  useEffect(() => {
    const mask = document.querySelector(".mask") as HTMLElement;
    if (!open) {
      if (mask.classList.contains("over")) {
        mask.classList.remove("over");
      }
      return;
    }
    // const foots = document.querySelectorAll(".fonte") as HTMLElement[];
    mask.classList.add("over");
  }, [open]);
  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="AlbumCard m-6 relative  transition-opacity z-1 w-100 h-40 cursor-pointer  flex flex-row items-center   px-5 shadow-md rounded-3
        "
        style={{
          boxShadow:
            "rgba(24, 32, 79, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.5) 0px 0px 0px 0.5px inset",
        }}
      >
        <AverageImg
          setPrimaryColor={(primary) => setPrimary(primary)}
          url="https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png"
        />

        <Bg className="h-[140%] w-[140%] filter-blur-[60px] absolute  z-[-1]  rounded-[50%] transition-transform"></Bg>
        <div
          className="mask ml-4 my-4 h-26 justify-between  flex-1 transition-transform "
          flex="~ col"
        >
          <div
            style={{ color: `${primary}`, opacity: 0.45 }}
            className=" font-900 tracking-widest text-[18px] text-shadow-sm"
            flex="~ row"
          >
            SPICY
          </div>
          <div
            flex="~ row"
            className=" text-white text-[18px] text-shadow-md w-full "
          >
            aespa
          </div>
          <div
            className=" text-white text-[12px] tridimensional-gradient-text"
            flex="~ row row-reverse"
          >
            MYWORLD - The 3rd Mini Album
          </div>
        </div>
      </div>
      <Dialog open={open} setOpen={(open) => setOpen(open)} />
    </>
  );
};

export default AlbumCard;
