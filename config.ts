import axios, { AxiosInstance } from "axios";

const axiosClient = (baseUrl: string): AxiosInstance => {
  if (!baseUrl) {
    throw new Error("Base url required to instantiate the axios client");
  }
  return axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { axiosClient };
