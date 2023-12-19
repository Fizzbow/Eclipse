import { useEffect, useState } from "react";
import AverageImg from "./AverageImg";

const AlbumCard = () => {
  const [primary, setPrimary] = useState<string>();

  useEffect(() => {
    const albumCard = document.querySelector(".AlbumCard") as HTMLElement;
    // albumCard.style.background = `linear-gradient(to right ,${primary} 30%,rgb(255,255,255))`;
  }, [primary]);
  return (
    <>
      <div
        className="AlbumCard relative overflow-hidden z-1  w-100 h-40 cursor-pointer  flex flex-row items-center bg-[rgb(255,255,255,0.3)]  px-5 shadow-md rounded-3
        "
        style={{
          backdropFilter: "blur(60px)",
          boxShadow:
            "rgba(24, 32, 79, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.5) 0px 0px 0px 0.5px inset",
        }}
      >
        <AverageImg
          setPrimaryColor={(primary) => setPrimary(primary)}
          url="https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png"
        />

        <figure
          className="h-full w-full relative block z-[-1] overflow-hidden rounded-[50%]"
          style={{
            background:
              "linear-gradient(to right ,rgb(68, 121, 136) 30%,rgb(255,255,255))",
          }}
        />
      </div>
    </>
  );
};

export default AlbumCard;
