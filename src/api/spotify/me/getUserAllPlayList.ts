import { UserPlayLists } from "@/types";
import request from "../..";

export const getUserAllPlayList = async (
  limit = 10,
  offset = 5
): Promise<UserPlayLists> => {
  const res = await request("/api").get(`v1/me/playlists`, {
    params: {
      limit,
      offset,
    },
  });
  return res.data;
};
