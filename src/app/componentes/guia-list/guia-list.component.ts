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

  sum:any;
  total:number = 0;
  pageActual: number = 1;
  sumaTotal:number = 0;
  guiaRemision:any;

  dialog: any;
  logService: any;

  ordenesTrabajo:any = []; 
  guiasRemision:any = []

  constructor(private ordenTrabajoService:OrdenTrabajoService,private guiaRemisionService:GuiaRemisionService ,private router:Router, private http:HttpClient, private rutaActiva:ActivatedRoute) { }

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
    this.getGuiasRemision()
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

  getGuiasRemisionId(id_OT:number){
    this.guiaRemisionService.getGuiasRemisionId(id_OT)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaRemision
      console.log(res.guiaRemision)
    }),
    (err:any)=> console.log(err)
  } 

  getGuiasRemision(){
    this.guiaRemisionService.getGuiasRemision()
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision;
      console.log('guias', res.guiaremision)
    }),
    (err: any)=> console.log(err);
  }

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
            this.getGuiasRemision();
          },
          err => console.log(err)
        )
      }
    })
  }

  open(){

  }

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
    
    private guardarGuia(guiaToInsert: GuiaRemision) {
    this.guiaRemisionService.postGuiaRemision(guiaToInsert).subscribe();
  }


}
