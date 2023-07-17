import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicropgmentacaoPageRoutingModule } from './micropgmentacao-routing.module';

import { MicropgmentacaoPage } from './micropgmentacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicropgmentacaoPageRoutingModule
  ],
  declarations: [MicropgmentacaoPage]
})
export class MicropgmentacaoPageModule {}
