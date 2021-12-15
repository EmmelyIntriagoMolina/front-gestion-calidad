import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-guia-config',
  templateUrl: './guia-config.component.html',
  styleUrls: ['./guia-config.component.css']
})
export class GuiaConfigComponent implements OnInit {

  guiasRemision: any = []
  ordenesTrabajo: any = []

  constructor(private guiaRemisionService:GuiaRemisionService, private rutaActiva:ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService) { }

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

  getGuiaRemisionIdd(id:number){
    this.guiaRemisionService.getGuiasRemisionIdd(id)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
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

}
