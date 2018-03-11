import { Injectable } from '@angular/core';
import {PhysicalInterface, Status} from './data';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {


  private StatusURL = 'http://localhost:5000/api/OSInfo';
  private PhysicalInterfaceArrayURL = 'http://localhost:5000/api/PhysicalInterfaces';
  private PhysicalInterfaceURL = 'http://localhost:5000/api/PhysicalInterfaces/';

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.StatusURL);
  }

  getPhysicalInterfaceArray(): Observable<PhysicalInterface[]> {
    return this.http.get<PhysicalInterface[]>(this.PhysicalInterfaceArrayURL);
  }

  getPhysicalInterface(inter_name: string): Observable<PhysicalInterface> {
    return this.http.get<PhysicalInterface>(this.PhysicalInterfaceURL + inter_name);
  }

}
