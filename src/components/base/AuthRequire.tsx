import isAccessToken from "@/api/spotify/account/getAccessToken";
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

    if (tokenInfo) {
      const info = await isAccessToken(SPOTIFY_CLIENT_ID);
      setIsAccess(info);
    } else {
      setIsAccess(false);
    }
    setIsLoading(false);
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
