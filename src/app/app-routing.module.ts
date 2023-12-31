import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/page-one/page-one.module').then(
        (m) => m.PageOneModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('../app/modules/page-two/page-two.module').then(
        (m) => m.PageTwoModule
      ),
  },
  {
    path: '*',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
