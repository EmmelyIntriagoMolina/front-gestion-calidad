import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';
import { ordenTrabajo } from '../../models/ordenTrabajo';
import {OrdenTrabajoService} from '../../services/orden-trabajo.service'
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OrdenCompra } from 'src/app/models/ordenCompra';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent  {


  rta:any = [];
  rt:any = [];

  conversion:any;

  form: FormGroup = new FormGroup({
    codigo : new FormControl(),
    fechaRegistro : new FormControl(),
    horaRecepcion : new FormControl(),
    procedencia : new FormControl(),
    piscina : new FormControl(),
    producto : new FormControl(),
    observacion : new FormControl(),
    tipoProducto : new FormControl(),
    camaronMar: new FormControl(),

  })

  @HostBinding('class') classes = 'row'

  OrdenTrabajo:ordenTrabajo = {
    id: 0,
    codigo: '',
    ordenCompra: '',
    proveedor: '',
    lote: 0,
    procedencia: '',
    piscina:'',
    producto:'',
    fechaRegistro:'',
    horaRecepcion:'',
    tipoProductoC:'',
    tipoProductoD:'',
    camaronMar:'',
    observacion:'',
    estadoCalidad:'',
    calidad:'',
    colorCamaron:''
  }
 
  edit : boolean = false;

  ordenCompra:OrdenCompra = {
    codigo: 0
  }

  constructor(private ordenTrabajoService:OrdenTrabajoService, private router:Router, private http:HttpClient) {  
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

  //Guardar una nueva orden de trabajo
  guardarOrdenTrabajo() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Registro Guardado!',
      showConfirmButton: false,
      timer: 1500
    })
    this.ordenTrabajoService.postOrdenTrabajo(this.OrdenTrabajo)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

  
}


