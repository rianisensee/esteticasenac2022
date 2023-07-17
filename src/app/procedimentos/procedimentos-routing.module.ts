import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedimentosPage } from './procedimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimentosPage
  },
  {
    path: 'depilacao',
    loadChildren: () => import('../depilacao/depilacao.module').then(m => m.DepilacaoPageModule)
  },
  {
    path: 'designdesobrancelhas',
    loadChildren: () => import('../designdesobrancelhas/designdesobrancelhas.module').then(m => m.DesigndesobrancelhasPageModule)
  },
  {
    path: 'drenagemlinfatica',
    loadChildren: () => import('../drenagemlinfatica/drenagemlinfatica.module').then(m => m.DrenagemlinfaticaPageModule)
  },
  {
    path: 'limpezadepele',
    loadChildren: () => import('../limpezadepele/limpezadepele.module').then(m => m.LimpezadepelePageModule)
  },
  {
    path: 'massagem',
    loadChildren: () => import('../massagem/massagem.module').then(m => m.MassagemPageModule)
  },
  {
    path: 'microagullhamento',
    loadChildren: () => import('../microagullhamento/microagullhamento.module').then(m => m.MicroagullhamentoPageModule)
  },
  {
    path: 'micropgmentacao',
    loadChildren: () => import('../micropgmentacao/micropgmentacao.module').then(m => m.MicropgmentacaoPageModule)
  },
  {
    path: 'peeling',
    loadChildren: () => import('../peeling/peeling.module').then(m => m.PeelingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedimentosPageRoutingModule {}