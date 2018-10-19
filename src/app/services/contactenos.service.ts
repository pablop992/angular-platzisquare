import { Injectable } from '@angular/core';
import { Contactenos } from '../model/contactenos';

@Injectable({
  providedIn: 'root'
})
export class ContactenosService {

  constructor() { }

  guardarContactenosInfo(contactenos : Contactenos){
    console.log("Guardando info de contactenos", contactenos)
  }

}
