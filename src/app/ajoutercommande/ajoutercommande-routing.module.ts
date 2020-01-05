import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutercommandePage } from './ajoutercommande.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutercommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutercommandePageRoutingModule {}
