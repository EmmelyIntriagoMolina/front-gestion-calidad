import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ordenTrabajo } from '../models/ordenTrabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  URL =`http://192.168.0.240:3333/ordenTrabajo`

  constructor(private http:HttpClient) { }

  //metodos orden de trabajo
  getOrdenesTrabajo(){
   return this.http.get(`${this.URL}/consultarOrdenesTrabajo`);
  }

  postOrdenTrabajo(ordenTrabajo:ordenTrabajo){
    return this.http.post(`${this.URL}/ingresarOrdenTrabajo`, ordenTrabajo)
  }

  getOrdenTrabajo(id:string){
    return this.http.get(`${this.URL}/consultarOrdenTrabajoId/${id}`);
  }

  putOrdenTrabajo(id:string | number, putOrdenTrabajo:ordenTrabajo){
    return this.http.put(`${this.URL}/actualizarOrdenTrabajo/${id}`, putOrdenTrabajo);
  }

  deleteOrdenTrabajo(id: string, deleteOrdenTrabajo:ordenTrabajo){
    return this.http.put(`${this.URL}/eliminarOrdenTrabajo/${id}`, deleteOrdenTrabajo);
  }

  //Orden Compra
  getOrdenCompra(){
    return this.http.get(`${this.URL}/consultarOrdenCompra`);
  } 
}