import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'procedimentos',
    loadChildren: () => import('./procedimentos/procedimentos.module').then( m => m.ProcedimentosPageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then( m => m.TimePageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'depilacao',
    loadChildren: () => import('./depilacao/depilacao.module').then( m => m.DepilacaoPageModule)
  },
  {
    path: 'designdesobrancelhas',
    loadChildren: () => import('./designdesobrancelhas/designdesobrancelhas.module').then( m => m.DesigndesobrancelhasPageModule)
  },
  {
    path: 'drenagemlinfatica',
    loadChildren: () => import('./drenagemlinfatica/drenagemlinfatica.module').then( m => m.DrenagemlinfaticaPageModule)
  },
  {
    path: 'limpezadepele',
    loadChildren: () => import('./limpezadepele/limpezadepele.module').then( m => m.LimpezadepelePageModule)
  },
  {
    path: 'massagem',
    loadChildren: () => import('./massagem/massagem.module').then( m => m.MassagemPageModule)
  },
  {
    path: 'microagullhamento',
    loadChildren: () => import('./microagullhamento/microagullhamento.module').then( m => m.MicroagullhamentoPageModule)
  },
  {
    path: 'micropgmentacao',
    loadChildren: () => import('./micropgmentacao/micropgmentacao.module').then( m => m.MicropgmentacaoPageModule)
  },
  {
    path: 'peeling',
    loadChildren: () => import('./peeling/peeling.module').then( m => m.PeelingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
