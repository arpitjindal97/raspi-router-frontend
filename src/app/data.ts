
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
  Gateway:      string;
  Wpa:          string;
  Hostapd:      string;
  Dnsmasq:      string;
  Info:         InfoClass;

}
export class InfoClass {
  IpAddress:        string;
  BroadcastAddress: string;
  Gateway:          string;
  MacAddress:       string;
  RecvBytes:        string;
  RecvPackts:       string;
  TransBytes:       string;
  TransPackts:      string;
  ConntectedTo:     string;
  ApMacAddr:        string;
  BitRate:          string;
  Frequency:        string;
  LinkQuality:      string;
  Channel:          string;

}
