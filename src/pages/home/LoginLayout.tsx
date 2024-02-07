import { getProfile } from "@/api/spotify/users/getProfile";
import GetPlayListBar from "@/components/GetPlayListBar";
import { useEffect, useState } from "react";

const LoginLayout = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await getProfile();
    setImageUrl(res.images[0].url);
  };
  return (
    <main className="full flex flex-col">
      <header className="py-3 sticky bg-gray-100 rounded-2 items-center flex px-5 mx-5 flex-row justify-between">
        <div />
        <span className="font-800  text-5 text-slate-600">ECLIPSE</span>
        <Ava url={imageUrl} />
      </header>
      <GetPlayListBar />
    </main>
  );
};

const Ava = ({ url }: { url: string }) => {
  return (
    <div
      className="w-10 h-10 bg-contain rounded-[50%]"
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default LoginLayout;
