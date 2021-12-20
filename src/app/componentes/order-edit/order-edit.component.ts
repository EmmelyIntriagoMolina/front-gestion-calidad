import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  id:any;
  editing:boolean = false;
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

    this.getOrdenTrabajoId(this.ordenesTrabajo.id);

    this.id = this.rutaActiva.snapshot.params['id'];

  /*
    if (this.id) {
      this.editing = true;
      this.ordenTrabajoService.getOrdenesTrabajo().subscribe(
        (data:ordenTrabajo[])=>{
          this.ordenesTrabajo = data;
          this.ordenesTrabajo = this.ordenesTrabajo.find((m)=>{return m.OrdenTrabajo_id == this.id});
        }, (error)=>{
          console.log(error)
        }
        
      )
    }
    else {
      this.editing = false;
    }

  */
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
