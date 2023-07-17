import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicropgmentacaoPage } from './micropgmentacao.page';

const routes: Routes = [
  {
    path: '',
    component: MicropgmentacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicropgmentacaoPageRoutingModule {}
