import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesigndesobrancelhasPageRoutingModule } from './designdesobrancelhas-routing.module';

import { DesigndesobrancelhasPage } from './designdesobrancelhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesigndesobrancelhasPageRoutingModule
  ],
  declarations: [DesigndesobrancelhasPage]
})
export class DesigndesobrancelhasPageModule {}
