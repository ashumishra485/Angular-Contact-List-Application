import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor() { }

  public filesurl = 'http://172.19.96.249:8080/';  // aashu LAN
  
  public url = this.filesurl + 'v1/';
}
