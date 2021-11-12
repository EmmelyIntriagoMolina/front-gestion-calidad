import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderClienteFormComponent } from './componentes/order-cliente-form/order-cliente-form.component';
import { OrderClienteListComponent } from './componentes/order-cliente-list/order-cliente-list.component';
import { OrderFormComponent } from './componentes/order-form/order-form.component';
import { OrderListComponent } from './componentes/order-list/order-list.component';

const routes: Routes = [

  //Rutas orden de Trabajo
  {
    path: '',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path: '',
    component:OrderListComponent
  },
  {
    path: 'ordenTrabajo/add',
    component:OrderFormComponent
  },
  

  //Rutas orden de cliente
  {
    path: 'ordenCliente',
    component:OrderClienteListComponent
  },

  {
    path: 'ordenCliente/add',
    component:OrderClienteFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
