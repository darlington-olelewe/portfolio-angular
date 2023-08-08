import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

const data = [MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...data
  ],
  exports:[
    ...data
  ]
})
export class MaterialModule { }
