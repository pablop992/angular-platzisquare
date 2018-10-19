import { Injectable } from '@angular/core';
import { Lugar } from '../model/lugar';

@Injectable()
export class LugaresService {

  lugares : Array<Lugar> = [
    {id:1, name:"Test 1", description:"Test Description 1", distanceKms: 10, subscription: "FREE"},
    {id:2, name:"Test 2", description:"Test Description 2", distanceKms: 20, subscription: "GOLD"},
    {id:3, name:"Test 3", description:"Test Description 3", distanceKms: 10, subscription: "GOLD"},
    {id:4, name:"Test 4", description:"Test Description 4", distanceKms: 30, subscription: "FREE"},
    {id:5, name:"Test 5", description:"Test Description 5", distanceKms: 50, subscription: "FREE"},
    {id:6, name:"Test 6", description:"Test Description 6", distanceKms: 10, subscription: "GOLD"}
  ]

  constructor() { }

  getLugares(){
    return this.lugares;
  }

  getLugar(id: number){
    return this.lugares.find(lugar => lugar.id == id) || null;
  }

}
