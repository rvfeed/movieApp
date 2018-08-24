import { BaseRequestOptions } from '@angular/http';
export class AuthRequestOptions extends BaseRequestOptions {
    constructor(){
        super();
        this.headers.append("test", "test");
    }

}
