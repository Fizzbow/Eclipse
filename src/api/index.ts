import axios, { AxiosInstance } from "axios";
import { SPOTIFY_ACCESS_TOKEN } from "../constants/spotify.constants";
import { getAccessToken } from "./spotify/getAccessToken";
type Base = "/accounts" | "/api";

const request = (baseURL: Base): AxiosInstance => {
  const headers = { Authorization: "" };
  const access_token = getAccessToken();
  if (access_token) {
    headers.Authorization = `Bearer ${access_token}`;
  }
  const instance = axios.create({
    baseURL: `${baseURL}`,
    headers,
  });
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      console.error({ err });
    }
  );
  return instance;
};

export default request;
