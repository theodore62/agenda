import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveaucompterenduPageRoutingModule } from './nouveaucompterendu-routing.module';

import { NouveaucompterenduPage } from './nouveaucompterendu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveaucompterenduPageRoutingModule
  ],
  declarations: [NouveaucompterenduPage]
})
export class NouveaucompterenduPageModule {}
