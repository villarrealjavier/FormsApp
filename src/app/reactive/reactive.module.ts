import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { reactiveRoutingModule } from './reactiverouting.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { templateRoutingModule } from '../template/templaterouting.module';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    
  ],
  imports: [
    CommonModule,
    reactiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    templateRoutingModule,
  ],exports:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    reactiveRoutingModule
  ]
})
export class ReactiveModule { }
