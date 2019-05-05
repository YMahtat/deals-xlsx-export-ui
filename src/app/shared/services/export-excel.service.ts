import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor(public http: HttpClient) { }

  public getDealsExcelFile(): Observable<Blob> {
    return this.http.get(environment.baseBackEndUrl + '/export/deals', {responseType: 'blob'});
  }
}
