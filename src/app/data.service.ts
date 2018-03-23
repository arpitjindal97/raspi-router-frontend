import {Injectable} from '@angular/core';
import {JSONResponse, PhysicalInterface, Status} from './data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  private ServerIP = document.location.protocol + '//' + document.location.hostname + ':5000';
  private StatusURL = this.ServerIP + '/api/OSInfo';
  private PhysicalInterfaceURL = this.ServerIP + '/api/PhysicalInterfaces';

  constructor(private http: HttpClient) {
  }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.StatusURL);
  }

  getPhysicalInterfaceArray(): Observable<PhysicalInterface[]> {
    return this.http.get<PhysicalInterface[]>(this.PhysicalInterfaceURL);
  }

  getPhysicalInterface(inter_name: string): Observable<PhysicalInterface> {
    return this.http.get<PhysicalInterface>(this.PhysicalInterfaceURL + '/' + inter_name);
  }

  sendPhysicalInterfaceReconfigure(inter: PhysicalInterface): Observable<JSONResponse> {
    return this.http.post<JSONResponse>(this.ServerIP + '/api/PhysicalInterfaceReconfigure', JSON.stringify(inter));
  }

}
