import { Component, OnInit } from '@angular/core';
interface Persona {
  genero: string;
  notificaciones: boolean;
}
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  terminos:boolean=false;
   persona: Persona={
     genero:"",
     notificaciones:true,

   };
  constructor() { }

  ngOnInit(): void {
  }

  addPerson(){
    console.log(this.persona)
  }

}
