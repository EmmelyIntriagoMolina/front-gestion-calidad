import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})
export class AprobacionComponent implements OnInit {

  constructor(private ordenTrabajoService:OrdenTrabajoService, private router:Router) { }

  ordenesTrabajo: any = []; 
  guiasRemision: any = [];

  ngOnInit(): void {
    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
  
  }
  getOrdenTrabajoId(id:number){
    this.ordenTrabajoService.getOrdenTrabajoId(id)
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo;
      console.log('orden de trabajo', res.ordenTrabajo)
    }),
    (err: any)=> console.log(err);
  }

}
