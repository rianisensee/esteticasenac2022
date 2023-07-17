import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpezadepelePage } from './limpezadepele.page';

const routes: Routes = [
  {
    path: '',
    component: LimpezadepelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpezadepelePageRoutingModule {}
