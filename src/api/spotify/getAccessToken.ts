import request from "../index";
export const getAccessToken = async (clientId: string, code: string) => {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:6622/callback");
  params.append("code_verifier", verifier!);

  const res = await request("/accounts").post("/api/token", params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data.access_token;
};
