import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");
export interface IAppConfig{
    apiEindPoint: string;
}
export const AppConfig: IAppConfig=     {
    apiEindPoint: "http://localhost:9090"
}