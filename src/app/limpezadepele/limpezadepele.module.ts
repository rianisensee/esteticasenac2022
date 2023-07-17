import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpezadepelePageRoutingModule } from './limpezadepele-routing.module';

import { LimpezadepelePage } from './limpezadepele.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpezadepelePageRoutingModule
  ],
  declarations: [LimpezadepelePage]
})
export class LimpezadepelePageModule {}
