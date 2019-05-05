import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(public http: HttpClient) { }

  public getDeals(): Observable<any> {
    return this.http.get(environment.baseBackEndUrl + '/deals/all');
  }
}
