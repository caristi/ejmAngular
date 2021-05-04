import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './components/articulo/articulo.component';

@NgModule({
  declarations: [
    ArticuloComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ArticuloComponent]
})
export class ArticuloModule { }
