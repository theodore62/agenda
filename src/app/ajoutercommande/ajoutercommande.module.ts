import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutercommandePageRoutingModule } from './ajoutercommande-routing.module';

import { AjoutercommandePage } from './ajoutercommande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutercommandePageRoutingModule
  ],
  declarations: [AjoutercommandePage]
})
export class AjoutercommandePageModule {}
