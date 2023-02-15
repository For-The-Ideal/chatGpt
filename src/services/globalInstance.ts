import { App } from "vue";
import { http } from "./http";
import { baseUrl } from "./baseUrl";
import {regexUtils} from "../utils/regexUtils"
import mitt,{Emitter,EventType} from "mitt"

const bus: Emitter<Record<EventType, unknown>> = mitt()
export default {
  install: (app: App) => {
    app.config.globalProperties.$http = http;
    app.config.globalProperties.$baseUrl = baseUrl;
    app.config.globalProperties.$Bus = bus;
    app.config.globalProperties.$RegexUtils = regexUtils;
  },
};

//必须要加 否则不会有代码提示
declare module "vue" {
  interface ComponentCustomProperties {
    $http: typeof http;
    $baseUrl: typeof baseUrl;
    $Bus: typeof bus;
    $RegexUtils: typeof regexUtils;
  }
}
