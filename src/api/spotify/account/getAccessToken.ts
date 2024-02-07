import request from "../../index";
import {
  SPOTIFY_CODE_VERIFY,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_TOKEN,
  SPOTIFY_CODE,
} from "@/constants/spotify.constants";
import { AuthorizationInfo, CurrTokenRequest, Grant } from "@/types";
import { redirectToAuthCodeFlow } from "../redirectToAuthCodeFlow";
import { generateCodeVerifier } from "@/utils/PKCE";

const getAccessToken = async (client_id: string, isRefreshToken = false) => {
  const code = localStorage.getItem(SPOTIFY_CODE) as string;
  const userInfo = localStorage.getItem(SPOTIFY_TOKEN);

  let body: CurrTokenRequest<typeof isRefreshToken>;

  if (userInfo && isRefreshToken) {
    const userObj = JSON.parse(userInfo) as AuthorizationInfo;
    body = {
      grant_type: Grant.REFRESH,
      refresh_token: userObj.refresh_token,
      client_id,
    };
  } else {
    if (!code) {
      const initVerifier = generateCodeVerifier();
      redirectToAuthCodeFlow(client_id, initVerifier);
    }
    const verifier = localStorage.getItem(SPOTIFY_CODE_VERIFY);

    body = {
      grant_type: Grant.AUTHORIZATION,
      code,
      code_verifier: verifier as string,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
    };
  }

  let authInfo: AuthorizationInfo | null = null;

  const btoaI = btoa(`${client_id}:${SPOTIFY_CLIENT_SECRET}`);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoaI,
  };

  try {
    const res = await request("/accounts").post("/api/token", body, {
      headers,
    });
    authInfo = res.data;
    if (authInfo) {
      localStorage.setItem(SPOTIFY_TOKEN, JSON.stringify(authInfo));
      return true;
    } else {
      return false;
    }
  } catch (err) {
    // TODO:验证失败时刷新token的操作
    // if(err.response ===401 || err.response===403) getAccessToken()
    return false;
  }
};

export default getAccessToken;
