import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrdenCompra } from 'src/app/models/ordenCompra';
import { ordenTrabajo } from 'src/app/models/ordenTrabajo';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})

export class OrderEditComponent implements OnInit {
  
  rt:any=[];
  rta:any=[];

  ordenesTrabajo: any = []

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

  constructor(private ordenTrabajoService: OrdenTrabajoService, private router:Router, private rutaActiva:ActivatedRoute) { }

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
    tipoProductoC:'',
    tipoProductoD:'',
    camaronMar:'',
    observacion:'',
    estadoCalidad:'',
    calidad:'',
    colorCamaron:'',
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
