import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';

@Component({
  selector: 'app-analisis-calidad',
  templateUrl: './analisis-calidad.component.html',
  styleUrls: ['./analisis-calidad.component.css']
})
export class AnalisisCalidadComponent implements OnInit {

  ordenesTrabajo:any = []; 
  guiasRemision:any = [];

  //Tabla de datos
  totalCamaron1: number = 0;   totalCamaron10: number = 0;    
  totalCamaron2: number = 0;   totalCamaron11: number = 0;
  totalCamaron3: number = 0;   totalCamaron12: number = 0;
  totalCamaron4: number = 0;   totalCamaron13: number = 0;
  totalCamaron5: number = 0;   totalCamaron14: number = 0;
  totalCamaron6: number = 0;   totalCamaron15: number = 0;
  totalCamaron7: number = 0;   totalCamaron16: number = 0;
  totalCamaron8: number = 0;   totalCamaron17: number = 0;
  totalCamaron9: number = 0;   totalCamaron18: number = 0;

  totalCamaron19: number = 0;  totalCamaron28: number = 0;
  totalCamaron20: number = 0;  totalCamaron29: number = 0;
  totalCamaron21: number = 3;  totalCamaron30: number = 0;
  totalCamaron22: number = 0;  totalCamaron31: number = 0;
  totalCamaron23: number = 0;  totalCamaron32: number = 3;
  totalCamaron24: number = 9;  totalCamaron33: number = 0;
  totalCamaron25: number = 0;
  totalCamaron26: number = 0;
  totalCamaron27: number = 0;

  gramo1 = 21.5;   gramo2 = 20.5;   gramo3 = 20.2;   gramo4 = 19.5;
  gramo5 = 18.9;   gramo6 = 18.2;   gramo7 = 17.6;   gramo8 = 16.9;
  gramo9 = 16.3;   gramo10 = 15.5;  gramo11 = 15;    gramo12 = 14.3;
  gramo13 = 13.7;  gramo14 = 13;    gramo15 = 12.4;  gramo16 = 11.7; 
  gramo17 = 11.1;  gramo18 = 10.4;  gramo19 = 9.6;   gramo20 = 9.1; 
  gramo21 = 8.5;   gramo22 = 7.8;   gramo23 = 7.2;   gramo24 = 6.5;
  gramo25 = 5.9;   gramo26 = 5.2;   gramo27 = 4.6;   gramo28 = 3.3;
  gramo29 = 2.6;   gramo30 = 2;     gramo31 = 1.3;   gramo32 = 0.7;
  gramo33 = 3.9;   


  //Total N° Camarones
  totalCamarones = (this.totalCamaron1 + this.totalCamaron2 + this.totalCamaron3 + this.totalCamaron4 + this.totalCamaron5 + this.totalCamaron6 + this.totalCamaron7 + this.totalCamaron8 + this.totalCamaron9 + this.totalCamaron10 + this.totalCamaron11 + this.totalCamaron12 + this.totalCamaron13 + this.totalCamaron14 + this.totalCamaron15 + this.totalCamaron16 + this.totalCamaron17 + this.totalCamaron18 + this.totalCamaron19 + this.totalCamaron20 + this.totalCamaron21 + this.totalCamaron22 + this.totalCamaron23 + this.totalCamaron24 + this.totalCamaron25 + this.totalCamaron26 + this.totalCamaron27 + this.totalCamaron28 + this.totalCamaron29 + this.totalCamaron30 + this.totalCamaron31 + this.totalCamaron32 + this.totalCamaron33 )


  // Calculo Peso Total = N° Camaron * Gr
  pesoTotal1 = this.totalCamaron1 * this.gramo1;       pesoTotal19 = this.totalCamaron19 * this.gramo19;
  pesoTotal2 = this.totalCamaron2 * this.gramo2;       pesoTotal11 = this.totalCamaron11 * this.gramo11;
  pesoTotal3 = this.totalCamaron3 * this.gramo3;       pesoTotal12 = this.totalCamaron12 * this.gramo12;
  pesoTotal4 = this.totalCamaron4 * this.gramo4;       pesoTotal13 = this.totalCamaron13 * this.gramo13;
  pesoTotal5 = this.totalCamaron5 * this.gramo5;       pesoTotal14 = this.totalCamaron14 * this.gramo14;
  pesoTotal6 = this.totalCamaron6 * this.gramo6;       pesoTotal15 = this.totalCamaron15 * this.gramo15;
  pesoTotal7 = this.totalCamaron7 * this.gramo7;       pesoTotal16 = this.totalCamaron16 * this.gramo16;
  pesoTotal8 = this.totalCamaron8 * this.gramo8;       pesoTotal17 = this.totalCamaron17 * this.gramo17;
  pesoTotal9 = this.totalCamaron9 * this.gramo9;       pesoTotal18 = this.totalCamaron18 * this.gramo18;
  pesoTotal10 = this.totalCamaron10 * this.gramo10;

  pesoTotal20 = this.totalCamaron20 * this.gramo20;    pesoTotal29 = this.totalCamaron29 * this.gramo29;
  pesoTotal21 = this.totalCamaron21 * this.gramo21;    pesoTotal30 = this.totalCamaron30 * this.gramo30;
  pesoTotal22 = this.totalCamaron22 * this.gramo22;    pesoTotal31 = this.totalCamaron31 * this.gramo31;
  pesoTotal23 = this.totalCamaron23 * this.gramo23;    pesoTotal32 = this.totalCamaron32 * this.gramo32;
  pesoTotal24 = this.totalCamaron24 * this.gramo24;    pesoTotal33 = this.totalCamaron33 * this.gramo33;
  pesoTotal25 = this.totalCamaron25 * this.gramo25;
  pesoTotal26 = this.totalCamaron26 * this.gramo26;
  pesoTotal27 = this.totalCamaron27 * this.gramo27;
  pesoTotal28 = this.totalCamaron28 * this.gramo28;

  //Total Peso Total
  totalPesoTotal = (this.pesoTotal1 + this.pesoTotal2 + this.pesoTotal3 + this.pesoTotal4 + this.pesoTotal5 + this.pesoTotal6 + this.pesoTotal7 + this.pesoTotal8 + this.pesoTotal9 + this.pesoTotal10 + this.pesoTotal11 + this.pesoTotal12 + this.pesoTotal13 + this.pesoTotal14 + this.pesoTotal15 + this.pesoTotal16 + this.pesoTotal17 + this.pesoTotal18 + this.pesoTotal19 + this.pesoTotal20 + this.pesoTotal21 + this.pesoTotal22 + this.pesoTotal23 + this.pesoTotal24 + this.pesoTotal25 + this.pesoTotal26 + this.pesoTotal27 + this.pesoTotal28 + this.pesoTotal29 + this.pesoTotal30 + this.pesoTotal31 + this.pesoTotal32 + this.pesoTotal33)

  //Calculo porcentaje
  porc1 = ((this.pesoTotal1/this.totalPesoTotal) * 100);
  porc2 = ((this.pesoTotal2/this.totalPesoTotal) * 100);
  porc3 = ((this.pesoTotal3/this.totalPesoTotal) * 100);
  porc4 = ((this.pesoTotal4/this.totalPesoTotal) * 100);
  porc5 = ((this.pesoTotal5/this.totalPesoTotal) * 100);
  porc6 = ((this.pesoTotal6/this.totalPesoTotal) * 100);
  porc7 = ((this.pesoTotal7/this.totalPesoTotal) * 100);

  porc8 = ((this.pesoTotal8/this.totalPesoTotal) * 100);
  porc9 = ((this.pesoTotal9/this.totalPesoTotal) * 100);
  porc10 = ((this.pesoTotal10/this.totalPesoTotal) * 100);
  porc11 = ((this.pesoTotal11/this.totalPesoTotal) * 100);
  porc12 = ((this.pesoTotal12/this.totalPesoTotal) * 100);
  porc13 = ((this.pesoTotal13/this.totalPesoTotal) * 100);
  porc14 = ((this.pesoTotal14/this.totalPesoTotal) * 100);

  porc15 = ((this.pesoTotal15/this.totalPesoTotal) * 100);
  porc16 = ((this.pesoTotal16/this.totalPesoTotal) * 100);
  porc17 = ((this.pesoTotal17/this.totalPesoTotal) * 100);
  porc18 = ((this.pesoTotal18/this.totalPesoTotal) * 100);
  porc19 = ((this.pesoTotal19/this.totalPesoTotal) * 100);
  porc20 = ((this.pesoTotal20/this.totalPesoTotal) * 100);
  porc21 = ((this.pesoTotal21/this.totalPesoTotal) * 100);

  porc22 = ((this.pesoTotal22/this.totalPesoTotal) * 100);
  porc23 = ((this.pesoTotal23/this.totalPesoTotal) * 100);
  porc24 = ((this.pesoTotal24/this.totalPesoTotal) * 100);
  porc25 = ((this.pesoTotal25/this.totalPesoTotal) * 100);
  porc26 = ((this.pesoTotal26/this.totalPesoTotal) * 100);
  porc27 = ((this.pesoTotal27/this.totalPesoTotal) * 100);
  porc28 = ((this.pesoTotal28/this.totalPesoTotal) * 100);

  porc29 = ((this.pesoTotal29/this.totalPesoTotal) * 100);
  porc30 = ((this.pesoTotal30/this.totalPesoTotal) * 100);
  porc31 = ((this.pesoTotal31/this.totalPesoTotal) * 100);
  porc32 = ((this.pesoTotal32/this.totalPesoTotal) * 100);
  porc33 = ((this.pesoTotal33/this.totalPesoTotal) * 100);

  //Total porcentaje

  totalPorc = (this.porc1 + this.porc2 + this.porc3 + this.porc4 + this.porc5 + this.porc6 + this.porc7 + this.porc8 + this.porc9 + this.porc10 + this.porc11 + this.porc12 + this.porc13 + this.porc14 + this.porc15 + this.porc16 + this.porc17 + this.porc18 + this.porc19 + this.porc20 + this.porc21 + this.porc22 + this.porc23 + this.porc24 + this.porc25 + this.porc26 + this.porc27 + this.porc28 + this.porc29 + this.porc30 + this.porc31 + this.porc32 + this.porc33)


  //Análiss Organoléptico
  
  //Peso muestra
  

  
  
  


  //Analisis de defectos
  deshidratado: number = 1;
  blandos: number = 0;
  mudados: number = 0;
  cabezaBaja: number = 0;
  cabezaNegra: number = 0;
  cabezaRoja: number = 0;
  hepReventado: number = 0;
  membranaRota: number = 0;
  perSegmento: number = 0;
  necrosisLeve: number = 0;
  necrosisFuerte: number = 0;
  melanosis: number = 0;
  quebrados: number = 0;
  deformes: number = 0;
  corbata: number = 7;
  patas: number = 0;
  cascara: number = 0;
  antenas: number = 2;
  deterioroRojo: number = 0;

  totalUni = (this.deshidratado + this.blandos + this.mudados + this.cabezaBaja + this.cabezaNegra + this.cabezaRoja + this.hepReventado + this.membranaRota + this.perSegmento + this.necrosisLeve + this.necrosisFuerte + this.melanosis + this.quebrados + this.deformes + this.corbata + this.patas + this.cascara + this.antenas + this.deterioroRojo)


  constructor(private rutaActiva:ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService, private guiaRemisionService:GuiaRemisionService, private router:Router) { }

  ngOnInit(): void {

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
      id: this.rutaActiva.snapshot.params.id
    };
    this.rutaActiva.params.subscribe(
      (params: Params)=> {
        this.guiasRemision.id = params.id;
        this.guiasRemision.id = this.ordenesTrabajo.id
        console.log("Guia",this.guiasRemision.id)
      }
    )

    this.getOrdenTrabajoId(this.ordenesTrabajo.id)
    this.getGuiaRemisionIdd(this.guiasRemision.id)

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

  getGuiaRemisionIdd(id:number){
    this.guiaRemisionService.getGuiasRemisionIdd(id)
    .subscribe(
      (res:any)=>{
      this.guiasRemision = res.guiaremision
      console.log("guia id_OT", res.guiaremision)
    }),
    (err:any)=> console.log(err)
  }

}
