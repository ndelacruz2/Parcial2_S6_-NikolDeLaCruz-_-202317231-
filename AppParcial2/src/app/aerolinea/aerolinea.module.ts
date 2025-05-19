import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaDetailComponent } from './aerolinea-detail/aerolinea-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AerolineaDetailComponent],
  declarations: [AerolineaDetailComponent]
})
export class AerolineaModule { }
