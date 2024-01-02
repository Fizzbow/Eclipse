import request from "..";

/**
 * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the total number of items and the request limit:fields=total,limit
 * Example: fields=items(added_by.id,track(name,href,album(name,href)))
 * doc: https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
 */

export const getPlayListItemsAlbum = async (playList_id: string) => {
  const filters = "items(tracks(name,album(name,href,images(url))))";
  return await getPlayListItems(playList_id, filters);
};

export const getPlayListItems = async (playList_id: string, fields: string) => {
  const res = await request("/api").get(`/playlists/${playList_id}/tracks`, {
    data: fields,
  });
  return res;
};
