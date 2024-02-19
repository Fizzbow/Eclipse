import request from "..";

export const getUserAllPlayList = async (
  user_id: string,
  limit = 10,
  offset = 5
) => {
  const res = await request("/api").get(`users/${user_id}/playlists`, {
    params: {
      limit,
      offset,
    },
  });
  return res;
};
