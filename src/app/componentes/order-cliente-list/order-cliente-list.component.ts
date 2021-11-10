import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdenClienteService } from 'src/app/services/ordenCliente/orden-cliente.service';

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

  ordenesCliente: any = [ ];

  constructor(private ordenClienteService:OrdenClienteService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  getOrdenCliente(){
    this.ordenClienteService.getOrdenesCliente()
    .subscribe(
      (res:any)=>{
      this.ordenesCliente = res.ordenCliente;
      console.log(res.ordenTrabajo)
    }),
    (err: any)=> console.log(err)
  } 
}


