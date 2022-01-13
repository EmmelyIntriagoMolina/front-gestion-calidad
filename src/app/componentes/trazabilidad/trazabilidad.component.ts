import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.css']
})
export class TrazabilidadComponent implements OnInit {

  ordenesTrabajo:any = []
  guiasRemision:any = []
  pageActual: number = 1;

  constructor(private rutaActiva:ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService, private guiaRemisionService:GuiaRemisionService) { }

  ngOnInit(): void {
    this.ordenesTrabajo = {
      id: this.rutaActiva.snapshot.params.id
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.ordenesTrabajo.id = params.id;
        console.log(this.ordenesTrabajo.id)
      }
    )

    this.guiasRemision = {
      id_OT: this.rutaActiva.snapshot.params.id_OT
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.guiasRemision.id_OT = params.id_OT;
        this.guiasRemision.id_OT = this.ordenesTrabajo.id
        console.log("Guia",this.guiasRemision.id_OT)
      }
    )

    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
    this.getGuiaRemisionId(this.guiasRemision.id_OT)
  }

   //suma de los pesos
   getSumaPeso(): number {  
    
    let suma=0; 
    let valorPeso;

    this.guiasRemision.forEach((valor: any) => {
      valorPeso = valor.peso
      suma = suma + valorPeso;
      console.log("Valor enviado Peso", valor.peso)
    });

    return suma
  }


  //suma de la sgavetas
  getSumaGavetas(): number {  

    let sumaGavetas=0; 
    let valorGavetas
    
    this.guiasRemision.forEach((valor: any) => {
      valorGavetas = valor.gavetas
      sumaGavetas = sumaGavetas + valorGavetas;
      console.log("Valor enviado Gavetas", valor.gavetas)
    });

    return sumaGavetas
  } 

  //suma de las muestras
  getSumaMuestras() {  
    
    let sumaMuestras=0; 
    let valorMuestras
    
    this.guiasRemision.forEach((valor: any) => {
      valorMuestras = valor.muestra
      sumaMuestras = sumaMuestras + valorMuestras;
      console.log("Valor enviado muestras", valor.muestra)
    });

    return sumaMuestras
  } 
  

  getOrdenTrabajoId(id:number){
    this.ordenTrabajoService.getOrdenTrabajoId(id)
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo
      console.log(res.ordenTrabajo)
    }),
    (err:any)=> console.log(err)
  }

  getGuiaRemisionId(id_OT:number){
    this.guiaRemisionService.getGuiasRemisionId(id_OT)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

  

}
