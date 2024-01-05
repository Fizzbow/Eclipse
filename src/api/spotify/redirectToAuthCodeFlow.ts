import { generateCodeChallenge } from "../../utils/PKCE";

export const redirectToAuthCodeFlow = async (
  clientId: string,
  verifier: string
) => {
  const challenge = await generateCodeChallenge(verifier);
  console.log({ challenge });

  localStorage.setItem("code_verifier", verifier);

  //   const clientId = 'YOUR_CLIENT_ID';
  // const redirectUri = 'http://localhost:8080';

  const scope = "user-read-private user-read-email";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: challenge,
    redirect_uri: "http://localhost:6622/callback",
  };
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
  // document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
};
