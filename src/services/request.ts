import axios, { AxiosError, AxiosResponse,AxiosRequestConfig } from "axios";


const baseUrl:ImportMetaEnv = import.meta.env;
console.log(baseUrl,'baseUrl')
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  // (config):AxiosRequestConfig => {
  //   const token = ""
  //   if (token) {
     
  //   }
  //   return config
  // },
  // (error:AxiosError) => {
  //   return error
  // }
)
// 响应拦截
axios.interceptors.response.use((res:AxiosResponse) => {
  // if (res.data.code === 200) {
   
  // }
  // return res
})

interface ResType<T> {
  code: number
  data?: T
  msg: string
}

interface Http {
  get<T>(url: string): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  put<T>(url: string, params?: unknown): Promise<ResType<T>>
  deletes<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url) {
    return new Promise((resolve, reject) => {
      let path: string = baseUrl + '/api' + url;
      axios.get(path).then((res:AxiosResponse) => {
          resolve(res.data)
        }).catch((err:AxiosResponse) => {
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      let path: string = baseUrl + '/api' + url;
      axios.post(path, JSON.stringify(params)).then((res:AxiosResponse) => {
          resolve(res.data)
        }).catch((err:AxiosResponse) => {
          reject(err.data)
        })
    })
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      let path: string = baseUrl + '/api' + url;
      axios.put(path, JSON.stringify(params)).then((res:AxiosResponse) => {
          resolve(res.data)
        }).catch((err:AxiosResponse) => {
          reject(err.data)
        })
    })
  },
  deletes(url, params) {
    return new Promise((resolve, reject) => {
      let path: string = baseUrl + '/api' + url;
      axios.delete(path,{params}).then((res:AxiosResponse) => {
          resolve(res.data)
        }).catch((err:AxiosResponse) => {
          reject(err.data)
        })
    })
  },
  upload(url, params) {
    return new Promise((resolve, reject) => {
      let path: string = baseUrl + '/api' + url;
      axios.post(path, params, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then((res:AxiosResponse) => {
          resolve(res.data)
        }).catch((err:AxiosResponse) => {
          reject(err.data)
        })
    })
  },
}
export default http

// interface Data {
//   [key: string]: string;
// }

// const baseUrl:ImportMetaEnv = import.meta.env;
// console.log(baseUrl,'baseUrl')

// export const get = (url: string): void => {
//   new Promise((resolve: (value: unknown) => void, resject: (value: unknown) => void) => {
//       let path: string = baseUrl + '/api' + url;
//       return axios.get(path).then((res: AxiosResponse) => {
//           return resolve(res);
//         }).catch((error: AxiosError) => {
//           return resject(error);
//         });
//     }
//   );
// };

// export const post = (url: string, data: Data): void => {
//   new Promise((resolve: (value: unknown) => void, resject: (value: unknown) => void) => {
//       let path: string = baseUrl + '/api' + url;
//       return axios.post(path, data).then((res: AxiosResponse) => {
//           return resolve(res);
//         }).catch((error: AxiosError) => {
//           return resject(error);
//         });
//     }
//   );
// };

// export const put = (url: string, data: Data): void => {
//   new Promise((resolve: (value: unknown) => void, resject: (value: unknown) => void) => {
//      let path: string = baseUrl + '/api' + url;
//       return axios.put(path, data).then((res: AxiosResponse) => {
//           return resolve(res);
//         }).catch((error: AxiosError) => {
//           return resject(error);
//         });
//     }
//   );
// };

// export const deletes = (url: string, data: Data): void => {
//   new Promise((resolve: (value: unknown) => void, resject: (value: unknown) => void) => {
//       let path: string = baseUrl + '/api' + url;
//       return axios.delete(path, data).then((res: AxiosResponse) => {
//           return resolve(res);
//         }).catch((error: AxiosError) => {
//           return resject(error);
//         });
//     }
//   );
// };
