import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdenCompra } from 'src/app/models/ordenCompra';
import { ordenTrabajo } from 'src/app/models/ordenTrabajo';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  rt:any=[];
  rta:any=[];

  form: FormGroup = new FormGroup({
    codigo : new FormControl(),
    fechaRegistro : new FormControl(),
    horaRecepcion : new FormControl(),
    procedencia : new FormControl(),
    piscina : new FormControl(),
    producto : new FormControl(),
    observacion : new FormControl(),
    tipoProducto : new FormControl(),
    camaronMar: new FormControl()
  })

  constructor(private ordenTrabajoService: OrdenTrabajoService, private router:Router) { }

  ngOnInit(): void {
  }

  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value=this.form.value;
      console.log(value)
    }
  }

  ordenCompra:OrdenCompra = {
    codigo: 0
  }

  OrdenTrabajo:ordenTrabajo = {
    id: 0,
    codigo: '',
    ordenCompra: '',
    proveedor: '',
    lote: 0,
    procedencia: '',
    fechaRegistro:'',
    horaRecepcion:'',
    piscina:'',
    producto:'',
    tipoProducto:'',
    camaronMar:'',
    observacion:'',
    estadoCalidad:''
  }
  edit : boolean = false;

  actualizarOrdenTrabajo(){
    this.ordenTrabajoService.putOrdenTrabajo(this.OrdenTrabajo.id, this.OrdenTrabajo)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}
