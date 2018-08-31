import { Component, OnInit, Inject } from '@angular/core';
import {APP_CONFIG, IAppConfig} from '../app.config';
import { HttpClient } from '@angular/common/http';
import {LocalService} from '../services/storage/local.service';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    private http: HttpClient,
    private local: LocalService) { }

  ngOnInit() {
  }

  fileUpload(file: File){    
    const form: FormData = new FormData();
    form.append("sub-token", this.local.getFromSession("sub-token"))
    form.append('fileKey', file[0], file[0].name)
    this.http.post(this.config.apiEindPoint+"/fileupload", form, {withCredentials: true})
    .subscribe(console.log)
    console.log(form)
    console.log(file[0].name);
  }
}
