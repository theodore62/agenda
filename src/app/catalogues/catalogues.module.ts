import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguesPageRoutingModule } from './catalogues-routing.module';

import { CataloguesPage } from './catalogues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguesPageRoutingModule
  ],
  declarations: [CataloguesPage]
})
export class CataloguesPageModule {}
