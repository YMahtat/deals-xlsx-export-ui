import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DealsComponent} from './deals.component';
import { ExportButtonComponent } from './export-button/export-button.component';

@NgModule({
  declarations: [
    DealsComponent,
    ExportButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DealsComponent,
    ExportButtonComponent
  ]
})
export class DealsModule { }
