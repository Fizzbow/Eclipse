import getAccessToken from "@/api/spotify/account/getAccessToken";
import { SPOTIFY_CLIENT_ID, SPOTIFY_TOKEN } from "@/constants";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface RequireProps {
  children: React.ReactElement;
  redirectTo: React.ReactElement | string;
}
const tokenInfo = localStorage.getItem(SPOTIFY_TOKEN);

const AuthRequire = ({ children, redirectTo }: RequireProps) => {
  const [isAccess, setIsAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIsAccess = async () => {
    setIsLoading(true);
    let info;
    if (!tokenInfo) {
      info = await getAccessToken(SPOTIFY_CLIENT_ID);
    } else {
      info = await getAccessToken(SPOTIFY_CLIENT_ID, true);
    }
    setIsLoading(false);
    setIsAccess(info);
  };
  useEffect(() => {
    fetchIsAccess();
  }, []);

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
