import { getProfile } from "@/api/spotify/me/getProfile";
import GetPlayListBar from "@/components/GetPlayListBar";
import Header from "@/components/Header";
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
      <Header connected AvaUrl={(profile && profile.images[0].url) || ""} />
      <GetPlayListBar profile={profile} />
    </main>
  );
};

export default LoginLayout;
