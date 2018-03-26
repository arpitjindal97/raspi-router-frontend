import {Injectable} from '@angular/core';
import {JSONResponse, PhysicalInterface, Status} from './data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  private ServerIP = document.location.protocol + '//' + document.location.hostname + ':'+ document.location.port;
  private StatusURL = this.ServerIP + '/api/OSInfo';
  private PhysicalInterfaceURL = this.ServerIP + '/api/PhysicalInterfaces';
  private PhysicalInterfaceReconfigure = this.ServerIP + '/api/PhysicalInterfaceReconfigure';

  public physical_interface_names = [
  ];

  constructor(private http: HttpClient) {
  }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.StatusURL);
  }

  getPhysicalInterfaceArray() {
    this.physical_interface_names = [];

    this.http.get<PhysicalInterface[]>(this.PhysicalInterfaceURL).subscribe(
      (val: PhysicalInterface[]) => {
        for (let i = 0; i < val.length; i++) {
          this.physical_interface_names.push({name: val[i].Name});
        }
      },
      (err) => {
        // console.log('this error is from data service')
      }
    );
  }

  getPhysicalInterface(inter_name: string): Observable<PhysicalInterface> {
    return this.http.get<PhysicalInterface>(this.PhysicalInterfaceURL + '/' + inter_name);
  }

  sendPhysicalInterfaceReconfigure(inter: PhysicalInterface): Observable<JSONResponse> {
    return this.http.post<JSONResponse>(this.PhysicalInterfaceReconfigure, JSON.stringify(inter));
  }

  getPhysicalListFiltered(interName: string): object[] {
    const temp = [];
    for (let i = 0; i < this.physical_interface_names.length; i++) {

      if (this.physical_interface_names[i].name === interName) {
        continue;
      }
      temp.push(this.physical_interface_names[i]);
    }
    return temp;
  }

}
