import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ordenCliente } from 'src/app/models/ordenCliente';
import { OrdenClienteService } from 'src/app/services/ordenCliente/orden-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-cliente-list',
  templateUrl: './order-cliente-list.component.html',
  styleUrls: ['./order-cliente-list.component.css']
})

export class OrderClienteListComponent implements OnInit {

  pageActual: number = 1;
  filterNum = '';
  filterClient = '';
  filterRef = '';
  filterDest = '';

  ordenesCliente: any = [
   
  ]

  constructor(private ordenClienteService:OrdenClienteService, private http:HttpClient) { }
 
  ngOnInit(): void {
    this.getOrdenesCliente();
  } 

  getOrdenesCliente(){
    this.ordenClienteService.getOrdenesCliente()
    .subscribe(
      (res:any)=>{
      this.ordenesCliente = res.ordenCliente
      console.log(res.ordenCliente)
    }),
    (err:any)=> console.log(err)
  } 


  eliminarOrdenCliente(id:number){
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: "Al eliminar el registro no podrás visualizarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ordenClienteService.deleteOrdenCliente(id, this.ordenesCliente).subscribe(
          res => {
            console.log(res)
            this.getOrdenesCliente();
          },
          err => console.log(err)
        )
      }
    })
  }
}


