import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ordenCliente } from 'src/app/models/ordenCliente';
import { OrdenClienteService } from 'src/app/services/ordenCliente/orden-cliente.service';

@Component({
  selector: 'app-order-cliente-edit',
  templateUrl: './order-cliente-edit.component.html',
  styleUrls: ['./order-cliente-edit.component.css']
})
export class OrderClienteEditComponent implements OnInit {

  constructor(private ordenClienteService:OrdenClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  
  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value=this.form.value;
      console.log(value)
    }
    
  }

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
