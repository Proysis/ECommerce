import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    DeleteComponent],
  imports: [
    CommonModule,MatTooltipModule
  ],
  exports:[DeleteComponent]
})
export class GeneralControlsModule { }
