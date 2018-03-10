
export class StatusItem {
  key: string;
  value: string;
}
export class Status {

  DistributionId: string;
  Description:    string;
  Release:        string;
  Codename:       string;
  Hostname:       string;
  KernelRelease:  string;
  Architecture:   string;
  ModelName:      string;
  CPUs:           string;
  LocalTime:      string;
  TimeZone:       string;
  UpTime:         string;
  UpSince:        string;

  static getArrayMap( json: Status ): StatusItem[] {

    const something: StatusItem[] = [
      {key: 'Distribution Id', value: json.DistributionId},
      {key: 'Description', value: json.Description},
      {key: 'Release', value: json.Release},
      {key: 'Codename', value: json.Codename},
      {key: 'Hostname', value: json.Hostname},
      {key: 'Kernel Release', value: json.KernelRelease},
      {key: 'Architecture', value: json.Architecture},
      {key: 'Model Name', value: json.ModelName},
      {key: 'CPUs', value: json.CPUs},
      {key: 'Local Time', value: json.LocalTime},
      {key: 'Time Zone', value: json.TimeZone},
      {key: 'Up Time', value: json.UpTime},
      {key: 'Up Since', value: json.UpSince},
    ];

    return something;
  }


}
