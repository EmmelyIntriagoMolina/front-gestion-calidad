import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionComponent } from './componentes/aprobacion/aprobacion.component';
import { GuiaFormComponent } from './componentes/guia-form/guia-form.component';
import { GuiaListComponent } from './componentes/guia-list/guia-list.component';
import { OrderClienteEditComponent } from './componentes/order-cliente-edit/order-cliente-edit.component';
import { OrderClienteFormComponent } from './componentes/order-cliente-form/order-cliente-form.component';
import { OrderClienteListComponent } from './componentes/order-cliente-list/order-cliente-list.component';
import { OrderEditComponent } from './componentes/order-edit/order-edit.component';
import { OrderFormComponent } from './componentes/order-form/order-form.component';
import { OrderListComponent } from './componentes/order-list/order-list.component';

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
    path: 'ordenTrabajo/guiasRemision',
    component: GuiaListComponent
  },

  {
    path: 'ordenTrabajo/guiasRemision/add',
    component: GuiaFormComponent
  },

  //Aprobacion Lote
  {
    path: 'ordenTrabajo/aprobacion',
    component: AprobacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
