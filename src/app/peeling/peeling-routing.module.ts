import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeelingPage } from './peeling.page';

const routes: Routes = [
  {
    path: '',
    component: PeelingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeelingPageRoutingModule {}
