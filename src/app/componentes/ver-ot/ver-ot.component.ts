import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-ot',
  templateUrl: './ver-ot.component.html',
  styleUrls: ['./ver-ot.component.css']
})
export class VerOTComponent implements OnInit {

  ordenesTrabajo: any = []; 

  constructor(private ordenTrabajoService:OrdenTrabajoService, private rutaActiva:ActivatedRoute) { }

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
    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
    
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
  deleteOrdenTrabajo(codigo:string){
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
        this.ordenTrabajoService.deleteOrdenT(codigo, this.ordenesTrabajo)
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
      }
    })
  }

}
