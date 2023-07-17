import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroagullhamentoPage } from './microagullhamento.page';

const routes: Routes = [
  {
    path: '',
    component: MicroagullhamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroagullhamentoPageRoutingModule {}
