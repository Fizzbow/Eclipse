import axios, { AxiosInstance } from "axios";
import { SPOTIFY_TOKEN } from "../constants/spotify.constants";
import { AuthorizationInfo } from "../types";

type Base = "/accounts" | "/api" | "";

const userInfo = localStorage.getItem(SPOTIFY_TOKEN);

const request = (baseURL: Base): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    (config) => {
      if (!userInfo) return config;

      const userObj = JSON.parse(userInfo) as AuthorizationInfo;
      if (userObj.access_token && userObj.token_type) {
        config.headers.Authorization = `${userObj.token_type} ${userObj.access_token}`;
      }
      return config;
    },
    (err) => {
      return err;
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      throw err;
    }
  );

  return instance;
};

export default request;
