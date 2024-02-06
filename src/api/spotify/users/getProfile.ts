import request from "../..";

export const getProfile = async () => {
  const res = await request("/api").get("/me");
  return res.data;
};
