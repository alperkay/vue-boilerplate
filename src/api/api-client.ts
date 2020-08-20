import axios from "axios";
import { encodeQueryString } from "./api-utils";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const token = null;

export default class ApiClient {
  /*
   * Returns default headers list
   * which will be used with every request.
   */
  public static getHeaders(multipart = false): any {
    let defaultHeaders: any = DEFAULT_HEADERS;

    if (multipart) {
      defaultHeaders = {};
    }

    if (token) {
      defaultHeaders = {
        Authorization: `Bearer ${token}`,
        ...defaultHeaders,
      };
    }

    return defaultHeaders;
  }

  /*
   * Wraps axios and provides
   * more convenient post method
   * calls with data
   */
  public static post<T>(uri: string, data: any, parameters: any = {}) {
    if (Object.keys(parameters).length > 0) {
      uri = `${uri}?${encodeQueryString(parameters)}`;
    }

    return axios
      .post<T>(uri, data, {
        headers: this.getHeaders(),
        withCredentials: true,
      })
      .then((res) => res.data);
  }

  public static patch<T>(uri: string, data: any) {
    return axios
      .patch<T>(uri, data, {
        headers: this.getHeaders(),
        withCredentials: true,
      })
      .then((res) => res.data);
  }

  public static put<T>(uri: string, data: any) {
    return axios
      .put<T>(uri, data, {
        headers: this.getHeaders(),
        withCredentials: true,
      })
      .then((res) => res.data);
  }

  public static delete(uri: string, data?: any) {
    return axios.delete(uri, {
      data,
      headers: this.getHeaders(),
      withCredentials: true,
    });
  }

  public static get<T>(uri: string, data = {}) {
    if (Object.keys(data).length > 0) {
      uri = `${uri}?${encodeQueryString(data)}`;
    }

    return axios
      .get<T>(uri, {
        headers: this.getHeaders(),
        withCredentials: true,
      })
      .then((res) => res.data);
  }
}
