import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import Swal from 'sweetalert2';

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
  guiasRemision:any = []

  constructor(private guiaRemisionService:GuiaRemisionService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getGuiasRemision;
  }

  getGuiasRemision(){
    this.guiaRemisionService.getGuiasRemision()
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaRemision
      console.log(res.guiaRemision)
    }),
    (err:any)=> console.log(err)
  }

  eliminarGuiaRemision(id:number){
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: "Al eliminar el registro no podrás visualizarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.guiaRemisionService.deleteGuiaRemision(id, this.guiasRemision).subscribe(
          res => {
            console.log(res)
            this.getGuiasRemision();
          },
          err => console.log(err)
        )
      }
    })
  }

}
