import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';
import { templateRoutingModule } from './templaterouting.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    templateRoutingModule,
    FormsModule
  ],
  exports:[
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent,
    NotFoundComponent
  ]
})
export class TemplateModule { }
