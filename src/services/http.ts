import axios from "axios";
import qs from "qs";

let baseUrl: ImportMetaEnv = import.meta.env;
let headers = {
  fromHeader: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  jsonHeader: {
    "Content-Type": "application/json",
  },
};

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
}

interface Http {
  get<T>(url: string): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  put<T>(url: string, params?: unknown): Promise<ResType<T>>;
  deletes<T>(url: string, params?: unknown): Promise<ResType<T>>;
  thirdPartyRequest<T>(url: string, params?: unknown): Promise<ResType<T>>;
}

export let http: Http = {
  /**
   * @param    {String} url  请求路径
   * @returns                Promise
   */
  get(url) {
    let path: string = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.get(path, {
          headers: headers.fromHeader,
        }).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
  /**
   * @param {String}    url    请求路径
   * @param {Object}    data   参数
   * @returns                  Promise
   */
  post(url, data) {
    let path = baseUrl + "/api/" + url;
    return new Promise((resolve, resject) => {
      axios.post(path, {
          data: qs.stringify(data),
          headers: headers.fromHeader,
        }).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
  /**
   * @param {String}    url    请求路径
   * @param {Object}    data   参数
   * @returns                  Promise
   */
  put(url, data) {
    let path = baseUrl + "/api/" + url;
    return new Promise((resolve, resject) => {
      axios.put(path, {
          data: qs.stringify(data),
          headers: headers.fromHeader,
        }).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
  /**
   * @param {String}    url    请求路径
   * @param {Object}    data   参数
   * @returns                  Promise
   */
  deletes(url, data) {
    let path = baseUrl + "/api/" + url;
    return new Promise((resolve, resject) => {
      axios.delete(path, {
          data: qs.stringify(data),
          headers: headers.fromHeader,
        }).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
  /**
   * @param {String}    url    请求路径
   * @param {Object}    data   参数
   * @returns                  Promise
   */
  thirdPartyRequest(url, data) {
    let path = baseUrl + url;
    return new Promise((resolve, resject) => {
      axios.post(path, data).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
};
