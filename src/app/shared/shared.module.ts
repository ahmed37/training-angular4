import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './conver-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe

  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacePipe,
  ]
})
export class SharedModule { }
