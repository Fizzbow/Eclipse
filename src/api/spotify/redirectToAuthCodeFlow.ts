import { SPOTIFY_CODE_VERIFY } from "../../constants/spotify.constants";
import { generateCodeChallenge } from "../../utils/PKCE";

export const redirectToAuthCodeFlow = async (
  clientId: string,
  verifier: string
) => {
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem(SPOTIFY_CODE_VERIFY, verifier);

  const scope =
    "user-read-private user-read-email playlist-read-collaborative playlist-read-private";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: challenge,
    redirect_uri: import.meta.env.VITE_REDIRECT_URL,
  };
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
  // document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
};
