import { Profile } from "@/types";
import request from "../..";

export const getProfile = async (): Promise<Profile> => {
  const res = await request("/api").get("/v1/me");
  return res.data;
};
