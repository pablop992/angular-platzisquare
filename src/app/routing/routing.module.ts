import { NgModule } from '@angular/core';
import { LugaresComponent } from '../lugares/lugares.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { ContactenosComponent } from '../contactenos/contactenos.component';

const routes = [
  {path: 'lugares', component: LugaresComponent,
    children: [
      {
        path: 'detalle/:id', component: DetalleComponent
      }
    ]
  },
  {path: 'contact', component: ContactenosComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
