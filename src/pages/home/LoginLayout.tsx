import { getProfile } from "@/api/spotify/me/getProfile";
import GetPlayListBar from "@/components/GetPlayListBar";
import { Profile } from "@/types";
import { useEffect, useState } from "react";

const LoginLayout = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await getProfile();
    setProfile(res);
  };
  return (
    <main className="full flex flex-col">
      <header className="py-3 sticky bg-gray-100 rounded-2 items-center flex px-5 mx-5 flex-row justify-between">
        <div />
        <span className="font-800  text-5 text-slate-600">ECLIPSE</span>
        {profile && <Ava url={profile.images[0].url || ""} />}
      </header>
      <GetPlayListBar profile={profile} />
    </main>
  );
};

const Ava = ({ url }: { url: string }) => {
  return (
    <div
      className={`w-10 h-10 bg-contain rounded-[50%] ${
        url ? "bg-green-400" : ""
      }`}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default LoginLayout;
