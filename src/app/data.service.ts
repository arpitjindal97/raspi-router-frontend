import { Injectable } from '@angular/core';
import {Status} from './data';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {


  private statusURL = 'http://localhost:5000/api/DeviceInfo';

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.statusURL);
  }

}
