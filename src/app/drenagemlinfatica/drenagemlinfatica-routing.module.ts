import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrenagemlinfaticaPage } from './drenagemlinfatica.page';

const routes: Routes = [
  {
    path: '',
    component: DrenagemlinfaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrenagemlinfaticaPageRoutingModule {}
