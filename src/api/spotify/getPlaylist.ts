import request from "..";

/**
 * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:fields=total,limit
 * Example: fields=items(added_by.id,track(name,href,album(name,href)))
 * doc: https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
 */

// need items
// tracks：歌曲名称，歌曲image
// album：专辑名称
// artists：歌手名称
export const getPlayListItemsAlbum = async (
  playList_id: string,
  access_token: string
) => {
  const filters =
    "description,name,tracks.items(track(name,album(name,images),artists(name)))";
  return await getPlayListItems(playList_id, filters, access_token);
};

export const getPlayListItems = async (
  playList_id: string,
  fields: string,
  access_token: string
) => {
  const res = await request("/api").get(`v1/playlists/${playList_id}`, {
    params: { fields },
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return res;
};
