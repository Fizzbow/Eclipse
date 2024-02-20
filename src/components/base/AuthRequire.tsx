import isAccessToken from "@/api/spotify/account/getAccessToken";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CODE, SPOTIFY_TOKEN } from "@/constants";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireProps {
  children: React.ReactElement;
  redirectTo: React.ReactElement | string;
}
const tokenInfo = localStorage.getItem(SPOTIFY_TOKEN);
const localCode = localStorage.getItem(SPOTIFY_CODE);

const AuthRequire = ({ children, redirectTo }: RequireProps) => {
  const [isAccess, setIsAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const fetchIsAccess = async (init: boolean) => {
    setIsLoading(true);
    let access;
    if (init) {
      if (tokenInfo) {
        access = await isAccessToken(SPOTIFY_CLIENT_ID, true);
      } else {
        access = false;
      }
    } else {
      access = await isAccessToken(SPOTIFY_CLIENT_ID);
    }
    setIsAccess(access);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchIsAccess(true);
  }, []);

  useEffect(() => {
    if (!location.search || !location.search.includes("code") || localCode)
      return;

    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code") as string;
    localStorage.setItem(SPOTIFY_CODE, code);
    fetchIsAccess(false);
  }, [location.search]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!isAccess) {
    return typeof redirectTo === "string" ? (
      <Navigate to={redirectTo} />
    ) : (
      redirectTo
    );
  }
  return children;
};

export default AuthRequire;
