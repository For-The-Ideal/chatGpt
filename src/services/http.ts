import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import qs from "qs";
let responseCodeList: Array<Number> = [
  //http 状态码
  200, 400, 401, 429, 500,
];

let baseUrl: ImportMetaEnv = import.meta.env.VITE_BASE_HOST;
console.log(baseUrl,'baseUrl')

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
}

interface Http {
  get<T>(url: string): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  put<T>(url: string, params?: unknown): Promise<ResType<T>>;
  thirdPartyRequest<T>(url: string, params?: unknown): Promise<ResType<T>>;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = window.localStorage.getItem("token") || "";
    if (config.headers) {
      config.headers["Authorization"] = "Basic c3dvcmQ6c3dvcmRfc2VjcmV0";
    }
    if (token && config.headers) {
      config.headers["cloudx-auth"] = token;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (res: AxiosResponse) => {
  console.log(2)
    if (!res || !res.data) {
      throw new Error("服务器连接错误！");
    }
    if (res.status === 200 && responseCodeList.includes(res.data.code)) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.data);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);



export let http: Http = {
  /**
   * @param    {String} url  请求路径
   * @returns                Promise
   */
  get(url) {
    let path: string = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.get(path,{
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
    let path = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.post(path, qs.stringify(data)).then((res) => {
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
    let path = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.put(path, qs.stringify(data)).then((res) => {
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
      axios.post(path, qs.stringify(data)).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
};
