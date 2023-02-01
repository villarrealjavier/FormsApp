import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}
  myFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
    favoritos: this.fb.array([
      ['Suzuki',Validators.required],
      ['Yamaha']
    ],Validators.required)

  }) 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  isValidField(field: string){
    return this.myFormulario.controls[field].errors
    && this.myFormulario.controls[field].touched
  }

  // add(nombre:string){
  //   let last = this.myFormulario.controls;
  //   if(nombre){
  //     this.myFormulario.get('favoritos')?.
  //     // this.persona.favoritos.push({id:last+1,nombre:this.myFormulario.get('nombre')?.value});
  //     console.log(this.persona.favoritos);
  //     this.myFormulario.reset();

  //   }
   
  // }

}
