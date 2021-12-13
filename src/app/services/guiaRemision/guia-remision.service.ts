import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuiaRemision } from 'src/app/models/guiaRemision';

@Injectable({
  providedIn: 'root'
})
export class GuiaRemisionService {

  URL =`http://192.168.0.217:3333/guiaRemision`
  URL2 = `http://192.168.0.217:3333/ordenTrabajo`

  constructor(private http:HttpClient) { }

    //Métodos guias remision
    getGuiasRemision(){
      return this.http.get(`${this.URL}/consultarGuiaRemision`);
    }
  
    postGuiaRemision(guiaRemision:GuiaRemision){
      return this.http.post(`${this.URL}/ingresarGuiaRemision`, guiaRemision)
    }
  
    getGuiasRemisionId(id:number){
      return this.http.get(`${this.URL}/consultarGuiaRemisionId/${id}`);
    }
  
    putGuiaRemision(id:string | number, putGuiaRemision:GuiaRemision){
      return this.http.put(`${this.URL}/actualizarGuiaRemision/${id}`, putGuiaRemision);
    }
  
    deleteGuiaRemision(id: string | number, deleteGuiaRemision:GuiaRemision){
      return this.http.put(`${this.URL}/eliminarGuiaRemision/${id}`, deleteGuiaRemision);
    }


    getOrdenTrabajoId(id:number){
      return this.http.get(`${this.URL2}/consultarOrdenTrabajoId/${id}`);
    }
}
