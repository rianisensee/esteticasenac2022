import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesigndesobrancelhasPage } from './designdesobrancelhas.page';

const routes: Routes = [
  {
    path: '',
    component: DesigndesobrancelhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesigndesobrancelhasPageRoutingModule {}
