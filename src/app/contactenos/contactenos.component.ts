import { Component, OnInit } from '@angular/core';
import { Contactenos } from '../model/contactenos'
import { ContactenosService } from '../services/contactenos.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  contactenosInfo : any = {};

  contactenosOptions : Array<string> = [
    'Nuevos negocios',
    'Corregir informacion'
  ]

  constructor(private contactenosService : ContactenosService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.contactenosService.guardarContactenosInfo(this.contactenosInfo);
    this.contactenosInfo = {};
  }

}
