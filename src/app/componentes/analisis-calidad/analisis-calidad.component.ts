import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-analisis-calidad',
  templateUrl: './analisis-calidad.component.html',
  styleUrls: ['./analisis-calidad.component.css']
})
export class AnalisisCalidadComponent implements OnInit {

  ordenesTrabajo:any = []; 
  guiasRemision:any = []

  constructor(private rutaActiva:ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService, private guiaRemisionService:GuiaRemisionService, private router:Router) { }

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
      id: this.rutaActiva.snapshot.params.id
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.guiasRemision.id = params.id;
        this.guiasRemision.id = this.ordenesTrabajo.id
        console.log("Guia",this.guiasRemision.id)
      }
    )

    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
    this.getGuiaRemisionIdd(this.guiasRemision.id)

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

  getGuiaRemisionIdd(id:number){
    this.guiaRemisionService.getGuiasRemisionIdd(id)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

}
