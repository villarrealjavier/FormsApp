import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Patatas'),
  //   precio: new FormControl(1),
  //   existencias : new FormControl(12)

  // }) 
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
    precio: [null,[Validators.required, Validators.min(1),Validators.max(8)]],
    existencias : [null,[Validators.required, Validators.min(2),Validators.max(8)]]

  }) 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  save(){
    
    if (this.myForm.invalid){

      this.myForm.markAllAsTouched()
      return
      
    }
    console.log(this.myForm.value)
    this.myForm.reset()
  }
  
}
