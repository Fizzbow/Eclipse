import request from "../index";
import {
  SPOTIFY_CODE_VERIFY,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_TOKEN,
} from "../../constants/spotify.constants";

interface AuthInfo {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

const getAccessToken = async (client_id: string, code: string) => {
  const verifier = localStorage.getItem(SPOTIFY_CODE_VERIFY);

  const btoai = btoa(`${client_id}:${SPOTIFY_CLIENT_SECRET}`);
  const params = {
    grant_type: "authorization_code",
    code,
    code_verifier: verifier,
    redirect_uri: "http://localhost:6622/callback",
  };

  const res = await request("/accounts").post("/api/token", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoai,
    },
  });
  const authInfo = res.data as AuthInfo;
  if (authInfo) localStorage.setItem(SPOTIFY_TOKEN, JSON.stringify(authInfo));
};

export default getAccessToken;
export type { AuthInfo };
