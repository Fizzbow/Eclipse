import request from "../index";
import {
  SPOTIFY_CODE_VERIFY,
  SPOTIFY_CLIENT_SECRET,
} from "../../constants/spotify.constants";

export const getAccessToken = async (client_id: string, code: string) => {
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
  return res.data.access_token;
};
