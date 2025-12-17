import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugarComponent } from './lugar/lugar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LugarComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule
  ]
})
export class LugaresModule { }
