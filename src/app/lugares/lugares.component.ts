import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lugares : any = null;

  constructor(private lugaresService : LugaresService) { }

  ngOnInit() {
    this.lugares = this.lugaresService.getLugares();
  }

}
