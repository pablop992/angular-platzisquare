import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenosreactive',
  templateUrl: './contactenosreactive.component.html',
  styleUrls: ['./contactenosreactive.component.css']
})
export class ContactenosreactiveComponent implements OnInit {

  contactUser : FormGroup;

  contactenosOptions : Array<string> = [
    'Nuevos negocios',
    'Corregir informacion'
  ]

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    /*
      Se crean los FormControl para cada campo del formulario
    */
    this.contactUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoContacto: ['', Validators.required]
    })
  }

  /**
   * Getter que referencia los controles de los formularios, para acceder
   * a estos desde el template    
   */
  get form(){
    return this.contactUser.controls;
  }

  onSubmit(){
    console.log(this.contactUser.value);
  }

}
