import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {CustomDeviceService} from "../../services/custom-device.service";
import {DeviceType} from "../../models/DeviceType";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  windowWidth!:number;
  deviceType!:DeviceType;
  constructor(private deviceService: DeviceDetectorService,
              private customDeviceService: CustomDeviceService) {
    this.windowWidth = this.getWindowWidth();
    this.deviceType = this.getDeviceType();
  }

  ngOnInit() {
    window.addEventListener('resize',()=>{
      this.windowWidth = this.getWindowWidth();
      this.deviceType = this.getDeviceType();
    })
  }

  getIsMobile(){
    return this.deviceService.isMobile()
  }

  getIsTablet(){
    return this.deviceService.isTablet()
  }

  getIsDesktop(){
    return this.deviceService.isDesktop()
  }

  getDeviceType():DeviceType{
    return this.customDeviceService.getDeviceType()
  }

  getWindowWidth():number{
    return this.customDeviceService.getWindowSize();
  }

  protected readonly window = window;
}
