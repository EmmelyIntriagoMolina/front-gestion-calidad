import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ordenTrabajo } from '../models/ordenTrabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  URL =`http://192.168.0.194:3333/ordenTrabajo`

  constructor(private http:HttpClient) { }

  //metodos orden de trabajo
  getOrdenesTrabajo(){
   return this.http.get(`${this.URL}/consultarOrdenesTrabajo`);
  }

  getOrdenTrabajoId(id:number){
    return this.http.get(`${this.URL}/consultarOrdenTrabajoId/${id}`);
  }

  postOrdenTrabajo(ordenTrabajo:ordenTrabajo){
    return this.http.post(`${this.URL}/ingresarOrdenTrabajo`, ordenTrabajo)
  }

  putOrdenTrabajo(id:string | number, putOrdenTrabajo:ordenTrabajo){
    return this.http.put(`${this.URL}/actualizarOrdenTrabajo/${id}`, putOrdenTrabajo);
  }

  deleteOrdenT(id: string, deleteOrdenTrabajo:ordenTrabajo){
    return this.http.put(`${this.URL}/eliminarOrdenTrabajo/${id}`, deleteOrdenTrabajo);
  }

  //Orden Compra
  getOrdenCompra(){
    return this.http.get(`${this.URL}/consultarOrdenCompra`);
  } 
}