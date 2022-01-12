import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ordenCliente } from 'src/app/models/ordenCliente';

@Injectable({
  providedIn: 'root'
})
export class OrdenClienteService {

  URL=`http://172.16.5.98:3333/ordenCliente` 

  constructor(private http:HttpClient) { }

  //Métodos orden de cliente
  getOrdenesCliente(){
    return this.http.get(`${this.URL}/consultarOrdenesCliente`);
  }

  postOrdenTrabajo(ordenCliente:ordenCliente){
    return this.http.post(`${this.URL}/ingresarOrdenCliente`, ordenCliente)
  }

  getOrdenTrabajo(id:string){
    return this.http.get(`${this.URL}/consultarOrdenCliente/${id}`);
  }

  putOrdenTrabajo(id:string | number, putOrdenCliente:ordenCliente){
    return this.http.put(`${this.URL}/actualizarOrdenCliente/${id}`, putOrdenCliente);
  }

  deleteOrdenCliente(id: string | number, deleteOrdenCliente:ordenCliente){
    return this.http.put(`${this.URL}/eliminarOrdenCliente/${id}`, deleteOrdenCliente);
  }
}
