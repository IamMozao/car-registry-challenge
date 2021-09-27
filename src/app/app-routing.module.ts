import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLayoutComponent } from './core/layout/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
      path: '',
      loadChildren: () =>
        import('./public/public.module')
          .then(m => m.PublicModule),
    }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
