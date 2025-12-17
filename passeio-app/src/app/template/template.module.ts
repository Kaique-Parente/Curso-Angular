import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CategoriasModule } from '../categorias/categorias.module';
import { LugaresModule } from '../lugares/lugares.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule,
    LugaresModule
  ]
})
export class TemplateModule { }
