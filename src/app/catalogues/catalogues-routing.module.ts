import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguesPage } from './catalogues.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguesPageRoutingModule {}
