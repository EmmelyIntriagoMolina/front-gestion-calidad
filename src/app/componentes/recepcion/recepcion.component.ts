import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  ordenesTrabajo: any = []
  guiasRemision: any = []

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

  getGuiaRemisionId(id_OT:number){
    this.guiaRemisionService.getGuiasRemisionId(id_OT)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

  getGuiasRemision(){
    this.guiaRemisionService.getGuiasRemision()
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision;
      console.log('guias', res.guiaremision)
    }),
    (err: any)=> console.log(err);
  }

  deleteGuiaRemision(id:number){
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: "Al eliminar el registro no podrás visualizarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.guiaRemisionService.deleteGuiaRemision(id, this.guiasRemision)
        .subscribe(
          res => {
            console.log(res)
            this.getGuiasRemision();
          },
          err => console.log(err)
        )
      }
    })
  }

  abrirGuiaRemision(id:number){
    Swal.fire({
      title: 'Confirmar',
      text: "¿Estás seguro de abrir la guía?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'De acuerdo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/']);
        
      }
    })
  }

}
