import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { BasicosComponent } from './template/basicos/basicos.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent
},
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
   
  },
  {
  path: 'reactive',
  loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
