import AverageImg from "./AverageImg";

const AlbumCard = () => {
  return (
    <div className="w-100 cursor-pointer h-40 flex flex-row items-center bg-blue px-5 shadow-md rounded-3">
      {/* <img
        className="w-30 h-30 object-contain rounded-2"
        src="https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png"
      /> */}
      <AverageImg url="https://upload.wikimedia.org/wikipedia/en/6/63/Aespa_-_My_World.png" />
    </div>
  );
};

export default AlbumCard;
