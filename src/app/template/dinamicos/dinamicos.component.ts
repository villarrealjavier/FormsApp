import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild ('myFormulario') myFormulario!:NgForm;

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

}
