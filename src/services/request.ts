import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
let responseCodeList: Array<Number> = [
  //http 状态码
  200, 400, 401, 429, 500,
];

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = window.localStorage.getItem("token") || "";
    if (config.headers) {
      config.headers["Authorization"] = "Basic c3dvcmQ6c3dvcmRfc2VjcmV0";
      config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
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
