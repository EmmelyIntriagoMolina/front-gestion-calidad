import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisisCalidadComponent } from './componentes/analisis-calidad/analisis-calidad.component';
import { AprobacionComponent } from './componentes/aprobacion/aprobacion.component';
import { GuiaFormComponent } from './componentes/guia-form/guia-form.component';
import { GuiaListComponent } from './componentes/guia-list/guia-list.component';
import { OrderClienteEditComponent } from './componentes/order-cliente-edit/order-cliente-edit.component';
import { OrderClienteFormComponent } from './componentes/order-cliente-form/order-cliente-form.component';
import { OrderClienteListComponent } from './componentes/order-cliente-list/order-cliente-list.component';
import { OrderEditComponent } from './componentes/order-edit/order-edit.component';
import { OrderFormComponent } from './componentes/order-form/order-form.component';
import { OrderListComponent } from './componentes/order-list/order-list.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { VerOTComponent } from './componentes/ver-ot/ver-ot.component';

const routes: Routes = [

  //Rutas orden de Trabajo

  {
    path: '',
    component:OrderListComponent,

  },
  {
    path: 'ordenTrabajo/add',
    component:OrderFormComponent
  },
  {
    path: 'ordenTrabajo/editar/:id',
    component:OrderEditComponent
  },
  

  //Rutas orden de cliente
  {
    path: 'ordenCliente',
    component:OrderClienteListComponent
  },

  {
    path: 'ordenCliente/add',
    component:OrderClienteFormComponent
  },

  {
    path: 'ordenCliente/editar/:id',
    component:OrderClienteEditComponent
  },

  //Rutas guías de remision

  {
    path: 'ordenTrabajo/guiasRemision/:id',
    component: GuiaListComponent
  },

  //Aprobacion Lote
  {
    path: 'ordenTrabajo/aprobacion/:id',
    component: AprobacionComponent
  },

  {
    path: 'ordenTrabajo/ver/:id',
    component: VerOTComponent
  },
  {
    path: 'ordenTrabajo/recepcion/:id',
    component: RecepcionComponent
  },

  {
    path: 'ordenTrabajo/guiasRemision/:id/analisisCalidad',
    component: AnalisisCalidadComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
