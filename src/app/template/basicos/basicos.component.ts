import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!:NgForm;
  initForm ={
    producto:"",
    precio:"",
    existencias:""
  }
  constructor() { }

  check(nombre:string):boolean{
    return this.myForm?.controls[nombre]?.invalid &&
    this.myForm?.controls[nombre]?.touched
  }
 

  ngOnInit(): void {
  }

  save(){
    console.log(this.myForm)
    this.myForm.resetForm({
      producto:"",
      precio:0,
      existencias:"666"
    })

  }
}
