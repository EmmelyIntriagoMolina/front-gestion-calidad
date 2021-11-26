import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';


@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})

export class AprobacionComponent implements OnInit {

  constructor(private ordenTrabajoService:OrdenTrabajoService,private guiaRemisionService:GuiaRemisionService,  private router:Router, private rutaActiva:ActivatedRoute, private rutaActiva2:ActivatedRoute) { }

  ordenesTrabajo: any = []; 
  guiasRemision: any = []; 

  ngOnInit() {

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

  getOrdenTrabajoId(id:number){
    this.ordenTrabajoService.getOrdenTrabajoId(id)
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo
      console.log(res.ordenTrabajo)
    }),
    (err:any)=> console.log(err)
  }

  getGuiaRemisionId(id:number){
    this.guiaRemisionService.getGuiasRemisionId(id)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaRemision
      console.log("prueba",res.guiaRemision)
    }),
    (err:any)=> console.log(err)
  }

}