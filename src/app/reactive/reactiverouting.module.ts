import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicosComponent } from '../template/dinamicos/dinamicos.component';
import { SwitchesComponent } from '../template/switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'basicos',
        component: BasicosComponent,
    
      },
      {
        path: 'dinamicos',
        component: DinamicosComponent,
    
      },
      {
        path: 'switches',
        component: SwitchesComponent,
    
      },
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reactiveRoutingModule { 
  

}
