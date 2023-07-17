import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroagullhamentoPageRoutingModule } from './microagullhamento-routing.module';

import { MicroagullhamentoPage } from './microagullhamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicroagullhamentoPageRoutingModule
  ],
  declarations: [MicroagullhamentoPage]
})
export class MicroagullhamentoPageModule {}
