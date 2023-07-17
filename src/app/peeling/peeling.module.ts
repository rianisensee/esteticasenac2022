import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeelingPageRoutingModule } from './peeling-routing.module';

import { PeelingPage } from './peeling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeelingPageRoutingModule
  ],
  declarations: [PeelingPage]
})
export class PeelingPageModule {}
