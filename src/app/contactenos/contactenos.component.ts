import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  contactenosOptions : Array<string> = [
    'Nuevos negocios',
    'Corregir informacion'
  ]

  constructor() { }

  ngOnInit() {
  }

}
