import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { GuiaRemision } from 'src/app/models/guiaRemision';
import { ordenTrabajo } from 'src/app/models/ordenTrabajo';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';
import { GuiaFormComponent } from '../guia-form/guia-form.component';

@Component({
  selector: 'app-guia-list',
  templateUrl: './guia-list.component.html',
  styleUrls: ['./guia-list.component.css']
})

export class GuiaListComponent implements OnInit {

  totalPeso:any;
  totalMuestras:number = 0;
  sum:any;
  totalGavetas:number = 0;
  pageActual: number = 1;
  sumaTotal:number = 0;
  guiaRemision:any;

  dialog: any;
  logService: any;

  ordenesTrabajo:any = []; 
  guiasRemision:any = [];

  GuiaRemision:GuiaRemision = {
    id: 0,
    id_OT:0,
    codigo:0,
    horaingreso: '',
    placa: '',
    chofer:'',
    peso:8000,
    gavetas:0,
    muestra:0,
    estado:true
  }

  constructor(private ordenTrabajoService:OrdenTrabajoService,private guiaRemisionService:GuiaRemisionService ,private router:Router, private http:HttpClient, private rutaActiva:ActivatedRoute) { }

  ngOnInit() {

     //Calculo del total de peso
    this.totalPeso = this.guiasRemision.reduce((
      acc: any,
    )=> acc + (this.GuiaRemision.peso),
    0);
    console.log("Total: ", this.totalPeso); 


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
    this.guiasRemision = {
      id_OT: this.rutaActiva.snapshot.params.id_OT
    };

    
    //Traer ID de las guias de remision
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.guiasRemision.id_OT = params.id_OT;
        this.guiasRemision.id_OT = this.ordenesTrabajo.id
        console.log("Guia",this.guiasRemision.id_OT)
      }
    )

    this.getOrdenTrabajoId(this.ordenesTrabajo.id);
    this.getGuiaRemisionId(this.guiasRemision.id_OT); 
  }

  //suma de los pesos
  getSumaPeso(): number {  
    
    let suma=0; 
    let valorPeso;

    this.guiasRemision.forEach((valor: any) => {
      valorPeso = valor.peso
      suma = suma + valorPeso;
      console.log("Valor enviado Peso", valor.peso)
    });

    return suma
  }


  //suma de la sgavetas
  getSumaGavetas(): number {  

    let sumaGavetas=0; 
    let valorGavetas
    
    this.guiasRemision.forEach((valor: any) => {
      valorGavetas = valor.gavetas
      sumaGavetas = sumaGavetas + valorGavetas;
      console.log("Valor enviado Gavetas", valor.gavetas)
    });

    return sumaGavetas
  } 

  //suma de las muestras
  getSumaMuestras() {  
    
    let sumaMuestras=0; 
    let valorMuestras
    
    this.guiasRemision.forEach((valor: any) => {
      valorMuestras = valor.muestra
      sumaMuestras = sumaMuestras + valorMuestras;
      console.log("Valor enviado muestras", valor.muestra)
    });

    return sumaMuestras
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

  //listar la guía de remision de acuerdo al ID
  getGuiaRemisionId(id_OT:number){
    this.guiaRemisionService.getGuiasRemisionId(id_OT)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

  //eliminar una guía de remisión 
  deleteGuiaRemision(id:number){
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
        this.guiaRemisionService.deleteGuiaRemision(id, this.guiasRemision)
        .subscribe(
          res => {
            console.log(res)
            this.getGuiaRemisionId(id);
          },
          err => console.log(err)
        )
      }
    })
  }

  //Abrir cuadro de diálogo para crear nueva guía
  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(GuiaFormComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        this.guardarGuia(data);
      }, (error: any) => console.log(error));
      
    }
    
    //Método para guardar la guía creada
    private guardarGuia(guiaToInsert: GuiaRemision) {
    this.guiaRemisionService.postGuiaRemision(guiaToInsert).subscribe();
  }
}