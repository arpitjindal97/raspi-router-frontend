import { Injectable } from '@angular/core';
import {PhysicalInterface, Status} from './data';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {


  private StatusURL = 'http://localhost:5000/api/DeviceInfo';
  private PhysicalInterfaceURL = 'http://localhost:5000/api/PhysicalInterfaces';

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.StatusURL);
  }

  getPhysicalInterface(): Observable<PhysicalInterface[]> {
    return this.http.get<PhysicalInterface[]>(this.PhysicalInterfaceURL);
  }

}
