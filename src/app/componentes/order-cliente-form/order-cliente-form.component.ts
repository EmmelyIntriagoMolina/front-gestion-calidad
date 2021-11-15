import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ordenCliente } from 'src/app/models/ordenCliente';
import { OrdenClienteService } from 'src/app/services/ordenCliente/orden-cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-order-cliente-form',
  templateUrl: './order-cliente-form.component.html',
  styleUrls: ['./order-cliente-form.component.css']
})
export class OrderClienteFormComponent implements OnInit {

  rt:any = [];

  form: FormGroup = new FormGroup({
    fecha : new FormControl(),
    destino : new FormControl(),
    referencia : new FormControl(),
    observacion : new FormControl(),
    cliente : new FormControl(),
    producto : new FormControl()

  })


  OrdenCliente:ordenCliente = {
    numero: 0,
    destino: '',
    referencia: '',
    cliente: '',
    producto: '',
    observacion:''
  }

  edit : boolean = false;

  constructor(private ordenClienteService:OrdenClienteService, private router:Router, private http:HttpClient) {

  }

  

  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value=this.form.value;
      console.log(value)
    }
    
  }


  ngOnInit(): void {
  }

  guardarOrdenCliente() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Registro Guardado!',
      showConfirmButton: false,
      timer: 1500
    })
    this.ordenClienteService.postOrdenTrabajo(this.OrdenCliente)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/ordenCliente']);
      },
      err => console.log(err)
    )
    
  }


  actualizarOrdenCliente(){
    this.ordenClienteService.putOrdenTrabajo(this.OrdenCliente.numero, this.OrdenCliente)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/ordenCliente']);
      },
      err => console.log(err)
    )
  }

}
