import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})
export class AprobacionComponent implements OnInit {

  constructor(private ordenTrabajoService:OrdenTrabajoService) { }

  ordenesTrabajo: any = []; 

  ngOnInit(): void {
    this.getOrdenesTrabajo
  }

  getOrdenesTrabajo(){
    this.ordenTrabajoService.getOrdenesTrabajo()
    .subscribe(
      (res:any)=>{
      this.ordenesTrabajo = res.ordenTrabajo;
      console.log('orden de trabajo', res.ordenTrabajo)
    }),
    (err: any)=> console.log(err);
  }
  

}
