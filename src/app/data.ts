import {forEach} from '@angular/router/src/utils/collection';

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

export class PhysicalInterface {
  Name:         string;
  IsWifi:       string;
  Mode:         string;
  BridgeMode:   string;
  BridgeMaster: string;
  NatInterface: string;
  IpModes:      string;
  IpAddress:    string;
  SubnetMask:   string;
  Wpa:          string;
  Hostapd:      string;
  Dnsmasq:      string;
  Info:         Map<string, string> = new Map<string, string>();

  static getArrayFromJSON(json: PhysicalInterface[]): PhysicalInterface[] {
    const something: PhysicalInterface[] = [];

    json.forEach(function(inter) {

        const temp_inter: PhysicalInterface = new PhysicalInterface();
        temp_inter.Name = inter.Name;
        temp_inter.IsWifi = inter.IsWifi;
        temp_inter.Mode = inter.Mode;
        temp_inter.BridgeMode = inter.BridgeMode;
        temp_inter.BridgeMaster = inter.NatInterface;
        temp_inter.NatInterface = inter.NatInterface;
        temp_inter.IpModes = inter.IpModes;
        temp_inter.IpAddress = inter.IpAddress;
        temp_inter.SubnetMask = inter.SubnetMask;
        temp_inter.Wpa = inter.Wpa;
        temp_inter.Hostapd = inter.Hostapd;
        temp_inter.Dnsmasq = inter.Dnsmasq;
        temp_inter.Info = inter.Info;

        something.push(temp_inter);
    });
    return something;
  }

}
