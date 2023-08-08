import {Injectable} from '@angular/core';
import {DeviceType} from "../models/DeviceType";

@Injectable({
  providedIn: 'root'
})
export class CustomDeviceService {

  constructor() { }

  getWindowSize():number{
    return window.innerWidth
  }

  getDeviceType():DeviceType{
    if(this.getWindowSize() >= 1024) return DeviceType.DESKTOP;
    if(this.getWindowSize() >= 768) return DeviceType.TABLET;
    return DeviceType.MOBILE

  }
}
