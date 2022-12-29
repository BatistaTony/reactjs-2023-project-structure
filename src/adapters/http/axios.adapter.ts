import originalAxios, { AxiosInstance } from "axios";
import { HttpAdapterResponse, HttpClient } from "./http.type";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class AxiosAdapter implements HttpClient {
  constructor(private axiosDep: AxiosInstance) {}

  get(endpoint: string, config: HttpAdapterResponse = {}) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return this.axiosDep.get(endpoint, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  post(
    endpoint: string,
    data: Record<string, unknown>,
    config: HttpAdapterResponse = {}
  ) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return this.axiosDep.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  put(
    endpoint: string,
    data: Record<string, unknown>,
    config: HttpAdapterResponse = {}
  ) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return this.axiosDep.put(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  delete(endpoint: string, config: HttpAdapterResponse = {}) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return this.axiosDep.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  patch(
    endpoint: string,
    data: Record<string, unknown>,
    config: HttpAdapterResponse = {}
  ) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    return this.axiosDep.patch(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }
}

const axios = new AxiosAdapter(
  originalAxios.create({
    baseURL: BASE_URL,
  })
);

export default axios;
