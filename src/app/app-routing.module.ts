import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DealsComponent} from './deals/deals.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  { path: 'deals', component: DealsComponent },
  { path: '', redirectTo: '/deals', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
