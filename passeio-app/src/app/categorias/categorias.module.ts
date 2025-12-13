import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
