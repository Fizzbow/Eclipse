import { useEffect, useState } from "react";
import AverageImg from "./AverageImg";

const AlbumCard = () => {
  const [primary, setPrimary] = useState<string>();

  useEffect(() => {
    const albumCard = document.querySelector(".AlbumCard") as HTMLElement;
    albumCard.style.background = `linear-gradient(to right ,${primary},rgb(255,255,255))`;
  }, [primary]);
  return (
    <div className="AlbumCard z-0   w-100 cursor-pointer h-40 flex flex-row items-center  px-5 shadow-md rounded-3">
      <div className=" z-1 w-full h-full" />
      <AverageImg
        setPrimaryColor={(primary) => setPrimary(primary)}
        url="https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png"
      />
    </div>
  );
};

export default AlbumCard;
