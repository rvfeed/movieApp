import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");
export interface IAppConfig{    
    apiEindPoint: string;
    staticEndPoint:string
}
export class AppConfig implements IAppConfig{
    _endPoint = "http://localhost:9090";
    get apiEindPoint() {
        return this._endPoint+"/api/v1";
    }
    get staticEndPoint() {
        return this._endPoint+"/static";
    }
}