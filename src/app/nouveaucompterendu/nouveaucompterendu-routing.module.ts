import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveaucompterenduPage } from './nouveaucompterendu.page';

const routes: Routes = [
  {
    path: '',
    component: NouveaucompterenduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveaucompterenduPageRoutingModule {}
