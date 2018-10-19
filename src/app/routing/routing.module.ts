import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { ContactenosComponent } from '../contactenos/contactenos.component';
import { ContactenosreactiveComponent } from '../contactenosreactive/contactenosreactive.component';

const routes = [
  {
    path: 'lugares', 
    component: LugaresComponent,
    children: [
      {path: 'detalle/:id', component: DetalleComponent}
    ]
  },
  {
    path: 'contact',
    component: ContactenosComponent,
    pathMatch: 'full'
  },
  {
    path: 'contactreactive',
    component: ContactenosreactiveComponent
  },
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
