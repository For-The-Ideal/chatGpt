import axios,{AxiosResponse} from "axios";
import qs from "qs";

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
}

interface Header{
  [key:string]:{
    [key:string]:string
  },
}

interface Http {
  get<T>(url: string): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  put<T>(url: string, params?: unknown): Promise<ResType<T>>;
  deletes<T>(url: string, params?: unknown): Promise<ResType<T>>;
  thirdPartyRequest<T>(url: string, params?: unknown): Promise<ResType<T>>;
}

let baseUrl: ImportMetaEnv = import.meta.env.VITE_BASE_HOST;
let headers:Header = {
  fromHeader: {
    "Content-Type": "",
  },
};
export let http: Http = {
  /**
   * @param    {String} url  请求路径
   * @returns                Promise
   */
  get(url:string) {
    let path: string =baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.get(path).then((res) => {
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
  post(url:string, data:unknown) {
    let path: string = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.post(path,qs.stringify(data)).then((res) => {
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
  put(url:string, data:unknown) {
    let path: string = baseUrl + "/api" + url;
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
  deletes(url:string, data:unknown) {
    let path: string = baseUrl + "/api" + url;
    return new Promise((resolve, resject) => {
      axios.delete(path,{data:qs.stringify(data)}).then((res) => {
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
  thirdPartyRequest(url:string, data:unknown) {
    let path: string = baseUrl  + url;
    return new Promise((resolve, resject) => {
      axios.post(path, data).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          resject(err);
        });
    });
  },
};
