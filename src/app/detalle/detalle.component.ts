import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  private lugar : any = {};

  constructor(private actRoute : ActivatedRoute, private lugaresService : LugaresService) { 
  }

  ngOnInit() {
    /*
      Necesario para detectar cambios en los parametros de Route, el componente solamente se
      crea una vez, se debe suscribir a cambios en el 
    */
    this.actRoute.params.subscribe(params => {
      this.initializeLugar(params['id']);
    });

    let id = this.actRoute.snapshot.params['id'];
    console.log("Arrived place: " + id)
    this.initializeLugar(id);
    
  }

  initializeLugar(id : number){
    this.lugar = this.lugaresService.getLugar(id);
  }

}
