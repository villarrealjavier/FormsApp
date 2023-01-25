import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { reactiveRoutingModule } from './reactiverouting.module';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    
  ],
  imports: [
    CommonModule,
    reactiveRoutingModule
  ],exports:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    reactiveRoutingModule
  ]
})
export class ReactiveModule { }
