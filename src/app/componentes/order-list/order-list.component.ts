import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

  condicion = 'EN ESPERA'
  pageActual: number = 1;
  filterCodigo = '';
  filterFecha = '';
  filterProv = '';
  filterLot = '';
  filterEstadoCali = ''
 
  ordenesTrabajo: any = [];

  constructor(private ordenTrabajoService:OrdenTrabajoService, private http:HttpClient) {

  }

  ngOnInit(): void {
    
  }

  getOrdenesTrabajo(){
    this.ordenTrabajoService.getOrdenesTrabajo()
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo;
      console.log(res.ordenTrabajo)
    }),
    (err: any)=> console.log(err)
  } 

  eliminarOrdenTrabajo(id:string){
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
        this.ordenTrabajoService.deleteOrdenTrabajo(id, this.ordenesTrabajo)
        .subscribe(
          res => {
            console.log(res)
            this.getOrdenesTrabajo();
          },
          err => console.log(err)
        )
      }
    })

  }
}
