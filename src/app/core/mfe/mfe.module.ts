import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeRoutingModule } from './mfe-routing.module';
import { RoomComponent } from './room/room.component';


@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,
    MfeRoutingModule
  ]
})
export class MfeModule { }
