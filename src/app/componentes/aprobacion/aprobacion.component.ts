import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuiaRemision } from 'src/app/models/guiaRemision';
import { ordenTrabajo } from 'src/app/models/ordenTrabajo';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})

export class AprobacionComponent implements OnInit {

  cantidad:number=0;
  ordenesTrabajo: any = []; 
  guiasRemision: any = []; 
  total:number = 0;


  constructor(private ordenTrabajoService:OrdenTrabajoService,private guiaRemisionService:GuiaRemisionService,  private router:Router, private rutaActiva:ActivatedRoute, private rutaActiva2:ActivatedRoute) { }

  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value=this.form.value;
      console.log(value)
    }
  }


  form: FormGroup = new FormGroup({
    lote : new FormControl(),
    colorCamaron : new FormControl(),
    calidad : new FormControl()

  })

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

  ngOnInit() {

    //Traer ID de las ordenes de trabajo
    this.ordenesTrabajo = {
      id: this.rutaActiva.snapshot.params.id
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.ordenesTrabajo.id = params.id;
        console.log(this.ordenesTrabajo.id)
      }
    )

    //Traer ID de las guías de remisión
    this.guiasRemision = {
      id_OT: this.rutaActiva.snapshot.params.id_OT
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.guiasRemision.id_OT = params.id_OT;
        this.guiasRemision.id_OT = this.ordenesTrabajo.id
        console.log("Guia",this.guiasRemision.id_OT)
      }
    )

    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
    this.getGuiaRemisionId(this.guiasRemision.id_OT)
    
  }

  //listar la orden de trabajo de acuerdo al id 
  getOrdenTrabajoId(id:number){
    this.ordenTrabajoService.getOrdenTrabajoId(id)
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo
      console.log(res.ordenTrabajo)
    }),
    (err:any)=> console.log(err)
  }

  //listar la guía de remisión de acuerdo al id 
  getGuiaRemisionId(id_OT:number){
    this.guiaRemisionService.getGuiasRemisionId(id_OT)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

  //actualizar los campos de aprobación en la orden de trabajo
  actualizarOrdenTrabajoAprobacion(id:number){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Registro Actualizado!',
      showConfirmButton: false,
      timer: 1500
    })
    this.ordenTrabajoService.putOrdenTrabajoAprobacion(this.OrdenTrabajo.id, this.OrdenTrabajo)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }



}