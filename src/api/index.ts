import axios, { AxiosInstance } from "axios";
type Base = "/accounts" | "/api";

const request = (baseURL: Base): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${baseURL}`,
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
