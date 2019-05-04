import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DealsComponent} from './deals/deals.component';

const routes: Routes = [
  { path: 'deals', component: DealsComponent },
  { path: '', redirectTo: '/deals', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [AppRoutingModule]
})
export class AppRoutingModule { }
