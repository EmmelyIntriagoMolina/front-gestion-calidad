import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnalisisCalidad } from '../models/analisisCalidad';

@Injectable({
  providedIn: 'root'
})
export class AnalisisCalidadService {

  URL =`http://192.168.0.195:3333/ordenTrabajo`

  constructor(private http:HttpClient) { }

  //Métodos Análisis de Calidad

  //Ingresar - GET
  postAnalisisCalidad(analisisCalidad:AnalisisCalidad, id:number){
    return this.http.post(`${this.URL}/guiasRemision/analisisCalidad/guardarAnalisis/${id}`, analisisCalidad)
  } 

  //Consulta individual
  getAnalisisCalidadID(id:number){
    return this.http.get(`${this.URL}/guiasRemision/analisisCalidad/${id}`);
  }

  

}
