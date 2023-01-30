import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild ('myFormulario') myFormulario!:NgForm;
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}
  nombre!:string


  constructor() { }

  ngOnInit(): void {
  }

  check(nombre:string){
    return this.myFormulario?.controls[nombre]?.invalid && 
    this.myFormulario?.controls[nombre]?.touched
  }
  save(){
    console.log(this.myFormulario);
    this.myFormulario.resetForm()
  }

  delete(numero:number){
    this.persona.favoritos.splice(numero,1);

  }
  add(){
    let last = this.persona.favoritos.length;
    if(this.nombre){
      this.persona.favoritos.push({id:last+1,nombre:this.nombre});
      console.log(this.persona.favoritos);
      this.nombre="";

    }
   
  }

}
