import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnalisisCalidad } from 'src/app/models/analisisCalidad';
import { AnalisisCalidadService } from 'src/app/services/analisis-calidad.service';
import { GuiaRemisionService } from 'src/app/services/guiaRemision/guia-remision.service';
import { OrdenTrabajoService } from 'src/app/services/orden-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-analisis-calidad',
  templateUrl: './analisis-calidad.component.html',
  styleUrls: ['./analisis-calidad.component.css']
})
export class AnalisisCalidadComponent implements OnInit {
  
  constructor(private rutaActiva:ActivatedRoute, private ordenTrabajoService:OrdenTrabajoService, private guiaRemisionService:GuiaRemisionService, private router:Router, private analisisCalidadService:AnalisisCalidadService) { }

  ordenesTrabajo:any   = []; 
  guiasRemision:any    = [];
  analisissCalidad:any = [];

  totalcamarones111:any;

  //Tabla de datos
  totalCamaron1: number = 0;
  totalCamaron2: number = 0;
  totalCamaron3: number = 0;   
  totalCamaron4: number = 0;   
  totalCamaron5: number = 0;   
  totalCamaron6: number = 0;   
  totalCamaron7: number = 0;   
  totalCamaron8: number = 0;   
  totalCamaron9: number = 0;   
  totalCamaron10: number = 0; 
  totalCamaron11: number = 0;
  totalCamaron12: number = 0;
  totalCamaron13: number = 0;
  totalCamaron14: number = 0;
  totalCamaron15: number = 0;
  totalCamaron16: number = 0;
  totalCamaron17: number = 0;
  totalCamaron18: number = 0;
  totalCamaron19: number = 0;  
  totalCamaron20: number = 0;  
  totalCamaron21: number = 0;  
  totalCamaron22: number = 0;  
  totalCamaron23: number = 0;  
  totalCamaron24: number = 0;  
  totalCamaron25: number = 0;
  totalCamaron26: number = 0;
  totalCamaron27: number = 0;
  totalCamaron28: number = 0;
  totalCamaron29: number = 0;
  totalCamaron30: number = 0;
  totalCamaron31: number = 0;
  totalCamaron32: number = 0;
  totalCamaron33: number = 0;
   
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
  pesoTotal1 = this.totalCamaron1 * this.gramo1;
    pesoTotal1Redondeado = this.pesoTotal1.toFixed(1);  
  pesoTotal2 = this.totalCamaron2 * this.gramo2; 
    pesoTotal2Redondeado = this.pesoTotal2.toFixed(1);       
  pesoTotal3 = this.totalCamaron3 * this.gramo3;
    pesoTotal3Redondeado = this.pesoTotal3.toFixed(1);            
  pesoTotal4 = this.totalCamaron4 * this.gramo4;   
    pesoTotal4Redondeado = this.pesoTotal4.toFixed(1);    
  pesoTotal5 = this.totalCamaron5 * this.gramo5;    
    pesoTotal5Redondeado = this.pesoTotal5.toFixed(1);    
  pesoTotal6 = this.totalCamaron6 * this.gramo6;  
    pesoTotal6Redondeado = this.pesoTotal6.toFixed(1);      
  pesoTotal7 = this.totalCamaron7 * this.gramo7; 
    pesoTotal7Redondeado = this.pesoTotal7.toFixed(1);       
  pesoTotal8 = this.totalCamaron8 * this.gramo8; 
    pesoTotal8Redondeado = this.pesoTotal8.toFixed(1);       
  pesoTotal9 = this.totalCamaron9 * this.gramo9;  
    pesoTotal9Redondeado = this.pesoTotal9.toFixed(1);      
  pesoTotal10 = this.totalCamaron10 * this.gramo10;
    pesoTotal10Redondeado = this.pesoTotal10.toFixed(1); 
  pesoTotal11 = this.totalCamaron11 * this.gramo11;
    pesoTotal11Redondeado = this.pesoTotal11.toFixed(1); 
  pesoTotal12 = this.totalCamaron12 * this.gramo12;
    pesoTotal12Redondeado = this.pesoTotal12.toFixed(1); 
  pesoTotal13 = this.totalCamaron13 * this.gramo13;
    pesoTotal13Redondeado = this.pesoTotal13.toFixed(1); 
  pesoTotal14 = this.totalCamaron14 * this.gramo14;
    pesoTotal14Redondeado = this.pesoTotal14.toFixed(1); 
  pesoTotal15 = this.totalCamaron15 * this.gramo15;
    pesoTotal15Redondeado = this.pesoTotal15.toFixed(1); 
  pesoTotal16 = this.totalCamaron16 * this.gramo16;
    pesoTotal16Redondeado = this.pesoTotal16.toFixed(1); 
  pesoTotal17 = this.totalCamaron17 * this.gramo17;
    pesoTotal17Redondeado = this.pesoTotal17.toFixed(1); 
  pesoTotal18 = this.totalCamaron18 * this.gramo18;
    pesoTotal18Redondeado = this.pesoTotal18.toFixed(1); 
  pesoTotal19 = this.totalCamaron19 * this.gramo19;
    pesoTotal19Redondeado = this.pesoTotal19.toFixed(1); 
  pesoTotal20 = this.totalCamaron20 * this.gramo20;  
    pesoTotal20Redondeado = this.pesoTotal20.toFixed(1);   
  pesoTotal21 = this.totalCamaron21 * this.gramo21;    
    pesoTotal21Redondeado = this.pesoTotal21.toFixed(1); 
  pesoTotal22 = this.totalCamaron22 * this.gramo22;    
    pesoTotal22Redondeado = this.pesoTotal22.toFixed(1); 
  pesoTotal23 = this.totalCamaron23 * this.gramo23; 
    pesoTotal23Redondeado = this.pesoTotal23.toFixed(1);    
  pesoTotal24 = this.totalCamaron24 * this.gramo24; 
    pesoTotal24Redondeado = this.pesoTotal24.toFixed(1);    
  pesoTotal25 = this.totalCamaron25 * this.gramo25;
    pesoTotal25Redondeado = this.pesoTotal25.toFixed(1); 
  pesoTotal26 = this.totalCamaron26 * this.gramo26;
    pesoTotal26Redondeado = this.pesoTotal26.toFixed(1); 
  pesoTotal27 = this.totalCamaron27 * this.gramo27;
    pesoTotal27Redondeado = this.pesoTotal27.toFixed(1); 
  pesoTotal28 = this.totalCamaron28 * this.gramo28;
    pesoTotal28Redondeado = this.pesoTotal28.toFixed(1); 
  pesoTotal29 = this.totalCamaron29 * this.gramo29;
    pesoTotal29Redondeado = this.pesoTotal29.toFixed(1); 
  pesoTotal30 = this.totalCamaron30 * this.gramo30;
    pesoTotal30Redondeado = this.pesoTotal30.toFixed(1); 
  pesoTotal31 = this.totalCamaron31 * this.gramo31;
    pesoTotal31Redondeado = this.pesoTotal31.toFixed(1); 
  pesoTotal32 = this.totalCamaron32 * this.gramo32;
    pesoTotal32Redondeado = this.pesoTotal32.toFixed(1); 
  pesoTotal33 = this.totalCamaron33 * this.gramo33;
    pesoTotal33Redondeado = this.pesoTotal33.toFixed(1); 

  //Total Peso Total
  totalPesoTotal = (this.pesoTotal1 + this.pesoTotal2 + this.pesoTotal3 + this.pesoTotal4 + this.pesoTotal5 + this.pesoTotal6 + this.pesoTotal7 + this.pesoTotal8 + this.pesoTotal9 + this.pesoTotal10 + this.pesoTotal11 + this.pesoTotal12 + this.pesoTotal13 + this.pesoTotal14 + this.pesoTotal15 + this.pesoTotal16 + this.pesoTotal17 + this.pesoTotal18 + this.pesoTotal19 + this.pesoTotal20 + this.pesoTotal21 + this.pesoTotal22 + this.pesoTotal23 + this.pesoTotal24 + this.pesoTotal25 + this.pesoTotal26 + this.pesoTotal27 + this.pesoTotal28 + this.pesoTotal29 + this.pesoTotal30 + this.pesoTotal31 + this.pesoTotal32 + this.pesoTotal33)

  //Calculo porcentaje
  porc1 = ((this.pesoTotal1/this.totalPesoTotal) * 100);
    porc1Redondeado = this.porc1.toFixed(4);
  porc2 = ((this.pesoTotal2/this.totalPesoTotal) * 100);
    porc2Redondeado = this.porc2.toFixed(4);
  porc3 = ((this.pesoTotal3/this.totalPesoTotal) * 100);
    porc3Redondeado = this.porc3.toFixed(4);
  porc4 = ((this.pesoTotal4/this.totalPesoTotal) * 100);
    porc4Redondeado = this.porc4.toFixed(4);
  porc5 = ((this.pesoTotal5/this.totalPesoTotal) * 100);
    porc5Redondeado = this.porc5.toFixed(4);
  porc6 = ((this.pesoTotal6/this.totalPesoTotal) * 100);
    porc6Redondeado = this.porc6.toFixed(4);
  porc7 = ((this.pesoTotal7/this.totalPesoTotal) * 100);
    porc7Redondeado = this.porc7.toFixed(4);
  porc8 = ((this.pesoTotal8/this.totalPesoTotal) * 100);
    porc8Redondeado = this.porc8.toFixed(4);
  porc9 = ((this.pesoTotal9/this.totalPesoTotal) * 100);
    porc9Redondeado = this.porc9.toFixed(4);
  porc10 = ((this.pesoTotal10/this.totalPesoTotal) * 100);
    porc10Redondeado = this.porc10.toFixed(4);
  porc11 = ((this.pesoTotal11/this.totalPesoTotal) * 100);
    porc11Redondeado = this.porc11.toFixed(4);
  porc12 = ((this.pesoTotal12/this.totalPesoTotal) * 100);
    porc12Redondeado = this.porc12.toFixed(4);
  porc13 = ((this.pesoTotal13/this.totalPesoTotal) * 100);
    porc13Redondeado = this.porc13.toFixed(4);
  porc14 = ((this.pesoTotal14/this.totalPesoTotal) * 100);
    porc14Redondeado = this.porc14.toFixed(4);
  porc15 = ((this.pesoTotal15/this.totalPesoTotal) * 100);
    porc15Redondeado = this.porc15.toFixed(4);
  porc16 = ((this.pesoTotal16/this.totalPesoTotal) * 100);
    porc16Redondeado = this.porc16.toFixed(4);
  porc17 = ((this.pesoTotal17/this.totalPesoTotal) * 100);
    porc17Redondeado = this.porc17.toFixed(4);
  porc18 = ((this.pesoTotal18/this.totalPesoTotal) * 100);
    porc18Redondeado = this.porc18.toFixed(4);
  porc19 = ((this.pesoTotal19/this.totalPesoTotal) * 100);
    porc19Redondeado = this.porc19.toFixed(4);
  porc20 = ((this.pesoTotal20/this.totalPesoTotal) * 100);
    porc20Redondeado = this.porc20.toFixed(4);
  porc21 = ((this.pesoTotal21/this.totalPesoTotal) * 100);
    porc21Redondeado = this.porc21.toFixed(4);
  porc22 = ((this.pesoTotal22/this.totalPesoTotal) * 100);
    porc22Redondeado = this.porc22.toFixed(4);
  porc23 = ((this.pesoTotal23/this.totalPesoTotal) * 100);
    porc23Redondeado = this.porc23.toFixed(4);
  porc24 = ((this.pesoTotal24/this.totalPesoTotal) * 100);
    porc24Redondeado = this.porc24.toFixed(4);
  porc25 = ((this.pesoTotal25/this.totalPesoTotal) * 100);
    porc25Redondeado = this.porc25.toFixed(4);
  porc26 = ((this.pesoTotal26/this.totalPesoTotal) * 100);
    porc26Redondeado = this.porc26.toFixed(4);
  porc27 = ((this.pesoTotal27/this.totalPesoTotal) * 100);
    porc27Redondeado = this.porc27.toFixed(4);
  porc28 = ((this.pesoTotal28/this.totalPesoTotal) * 100);
    porc28Redondeado = this.porc28.toFixed(4);
  porc29 = ((this.pesoTotal29/this.totalPesoTotal) * 100);
    porc29Redondeado = this.porc29.toFixed(4);
  porc30 = ((this.pesoTotal30/this.totalPesoTotal) * 100);
    porc30Redondeado = this.porc30.toFixed(4);
  porc31 = ((this.pesoTotal31/this.totalPesoTotal) * 100);
    porc31Redondeado = this.porc31.toFixed(4);
  porc32 = ((this.pesoTotal32/this.totalPesoTotal) * 100);
    porc32Redondeado = this.porc32.toFixed(4);
  porc33 = ((this.pesoTotal33/this.totalPesoTotal) * 100);
   porc33Redondeado = this.porc33.toFixed(4);

  //Total porcentaje
  totalPorc = (this.porc1 + this.porc2 + this.porc3 + this.porc4 + this.porc5 + this.porc6 + this.porc7 + this.porc8 + this.porc9 + this.porc10 + this.porc11 + this.porc12 + this.porc13 + this.porc14 + this.porc15 + this.porc16 + this.porc17 + this.porc18 + this.porc19 + this.porc20 + this.porc21 + this.porc22 + this.porc23 + this.porc24 + this.porc25 + this.porc26 + this.porc27 + this.porc28 + this.porc29 + this.porc30 + this.porc31 + this.porc32 + this.porc33)

  //Análiss Organoléptico  
  //Peso muestra
  pesoMuestra = (this.totalPesoTotal / 1000 )
  resultadoPesoMuestra = ( this.pesoMuestra * 2.20462 ).toFixed(2);

  //Numero de camarones
  numeroCamarones = this.totalCamarones;
  
  //Grs Promedio
  grsPromedio = (this.totalPesoTotal / this.totalCamarones).toFixed(2);
  
  //Analisis de defectos
  deshidratado: number = 0;
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
  corbata: number = 0;
  patas: number = 0;
  cascara: number = 0;
  antenas: number = 0;
  deterioroRojo: number = 0;

  //Total Unidades
  totalUni = (this.deshidratado + this.blandos + this.mudados + this.cabezaBaja + this.cabezaNegra + this.cabezaRoja + this.hepReventado + this.membranaRota + this.perSegmento + this.necrosisLeve + this.necrosisFuerte + this.melanosis + this.quebrados + this.deformes + this.corbata + this.patas + this.cascara + this.antenas + this.deterioroRojo)

  //Total Porc(%)
  totalPorcDeshidratado = (this.deshidratado / this.totalCamarones );
    totalPorcDeshidratadoRedondeado = this.totalPorcDeshidratado.toFixed(2);
  totalPorcBlandos = (this.blandos / this.totalCamarones );
    totalPorcBlandosRedondeado = this.totalPorcBlandos.toFixed(2);
  totalPorcMudados = ( this.mudados / this.totalCamarones );
    totalPorcMudadosRedondeado = this.totalPorcMudados.toFixed(2);
  totalPorcCabezaBaja = ( this.cabezaBaja / this.totalCamarones );
    totalPorcCabezaBajaRedondeado = this.totalPorcCabezaBaja.toFixed(2);
  totalPorcCabezaNegra = ( this.cabezaNegra / this.totalCamarones );
    totalPorcCabezaNegraRedondeado  = this.totalPorcCabezaNegra.toFixed(2);
  totalPorcCabezaRoja = ( this.cabezaRoja / this.totalCamarones );
    totalPorcCabezaRojaRedondeado = this.totalPorcCabezaRoja.toFixed(2);
  totalPorcHepReventado = ( this.hepReventado / this.totalCamarones );
    totalPorcHepReventadoRedondeado = this.totalPorcHepReventado.toFixed(2);
  totalPorcMembranaRota = ( this.membranaRota / this.totalCamarones );
    totalPorcMembranaRotaRedondeado = this.totalPorcMembranaRota.toFixed(2);
  totalPorcPrimerSegmento = ( this.perSegmento / this.totalCamarones );
    totalPorcPrimerSegmentoRedondeado = this.totalPorcPrimerSegmento.toFixed(2);
  totalPorcNecrosisLeve = ( this.necrosisLeve / this.totalCamarones );
    totalPorcNecrosisLeveRedondeado = this.totalPorcNecrosisLeve.toFixed(2);
  totalPorcNecrosisFuerte = ( this.necrosisFuerte / this.totalCamarones );
    totalPorcNecrosisFuerteRedondeado = this.totalPorcNecrosisFuerte.toFixed(2);
  totalPorcMelanosis = ( this.melanosis / this.totalCamarones );
    totalPorcMelanosisRedondeado = this.totalPorcMelanosis.toFixed(2);
  totalPorcQuebrados = ( this.quebrados / this.totalCamarones );
    totalPorcQuebradosRedondeado = this.totalPorcQuebrados.toFixed(2);
  totalPorcDeformes = ( this.deformes / this.totalCamarones );
    totalPorcDeformesRedondeado = this.totalPorcDeformes.toFixed(2);
  totalPorcCorbata = ( this.corbata / this.totalCamarones );
    totalPorcCorbataRedondeado = this.totalPorcCorbata.toFixed(2);
  totalPorcPatas =  ( this.patas / this.totalCamarones );
    totalPorcPatasRedondeado = this.totalPorcPatas.toFixed(2);
  totalPorcCascara = ( this.cascara / this.totalCamarones );
    totalPorcCascaraRedondeado = this.totalPorcCascara.toFixed(2)
  totalPorcAntenas = ( this.antenas / this.totalCamarones );
    totalPorcAntenasRedondeado = this.totalPorcAntenas.toFixed(2)
  totalPorcDeterioro = ( this.deterioroRojo / this.totalCamarones );
    totalPorcDeterioroRedondeado = this.totalPorcDeterioro.toFixed(2);

  //Total porcentaje analisis defecto
  totalPorcAD = ( this.totalPorcDeshidratado + this.totalPorcBlandos + this.totalPorcMudados + this.totalPorcCabezaBaja + this.totalPorcCabezaNegra + this.totalPorcCabezaRoja + this.totalPorcHepReventado + this.totalPorcMembranaRota + this.totalPorcPrimerSegmento + this.totalPorcNecrosisLeve + this.totalPorcNecrosisFuerte + this.totalPorcMelanosis + this.totalPorcQuebrados + this.totalPorcDeformes + this.totalPorcCorbata + this.totalPorcPatas + this.totalPorcCascara + this.totalPorcAntenas + this.totalPorcDeterioro )
  totalPorcRedondeado = this.totalPorcAD.toFixed(2)

  AnalisisProducto:AnalisisCalidad = {
    id:0,
    producto:'',
    totalCamarones: 0,
    observacion:'',
    color:'',
    olor:'',
    sabor:'',
    temp1:0,
    temp2:0,
    temp3:0,
    temp4:0,
    temp5:0,
    temp6:0,
    temp7:0,
    temp8:0,
    temp9:0,
    temp10:0,
    pesoMuestra:0,
    numeroCamaronesAO:0,
    grsPromedio:0,
    otros100ppm:0,
    otros10ppm:0,
    deshidratadoUni:0,
    deshidratadosPorc:0,
    blandosUni:0,
    blandosPorc :0,
    mudadosUni:0,
    mudadosPorc:0,
    cabezaBajaUni :0,
    cabezaBajaPorc:0,
    cabezaNegraUni:0,
    cabezaNegraPorc :0,
    cabezaRojaUni:0,
    cabezaRojaPorc:0,
    hepReventadoUni:0,
    hepReventadoPorc :0,
    membranaRotaUni:0,
    membranaRotaPorc:0,
    primerSegmentoUni :0,
    primerSegmentoPorc :0,
    necrosisLeveUni :0,
    necrosisLevePorc:0,
    necrosisFuerteUni :0,
    necrosisFuertePorc :0,
    melanosisUni:0,
    melanosisPorc :0,
    quebradosUni:0,
    quebradosPorc :0,
    deformesUni :0,
    deformesPorc:0,
    corbataUni:0,
    corbataPorc:0,
    pataUni:0,
    pataPorc:0,
    cascarasUni:0,
    cascarasPorc:0,
    antenasUni:0,
    antenasPorc:0,
    deterioroRUni:0,
    deterioroRPorc:0,
    totalAnalisisDefUni:0,
    totalAnalisisDefPorc:0,
    ncamarones215:this.totalCamaron1,
    ncamarones205:this.totalCamaron2,
    ncamarones202:this.totalCamaron3,
    ncamarones195:this.totalCamaron4,
    ncamarones189:this.totalCamaron5,
    ncamarones182:this.totalCamaron6,
    ncamarones176:this.totalCamaron7,
    ncamarones169:this.totalCamaron8,
    ncamarones163:this.totalCamaron9,
    ncamarones155:this.totalCamaron10,
    ncamarones15:this.totalCamaron11,   
    ncamarones143:this.totalCamaron12,
    ncamarones137:this.totalCamaron13, 
    ncamarones13 :this.totalCamaron14,
    ncamarones124:this.totalCamaron15, 
    ncamarones117:this.totalCamaron16, 
    ncamarones111:this.totalCamaron17, 
    ncamarones104:this.totalCamaron18, 
    ncamarones96 :this.totalCamaron19,
    ncamarones91:this.totalCamaron20,
    ncamarones85:this.totalCamaron21,
    ncamarones78:this.totalCamaron22,
    ncamarones72:this.totalCamaron23,
    ncamarones65:this.totalCamaron24,
    ncamarones59:this.totalCamaron25,
    ncamarones52:this.totalCamaron26,
    ncamarones46:this.totalCamaron27,
    ncamarones33:this.totalCamaron28,
    ncamarones26:this.totalCamaron29,
    ncamarones2:this.totalCamaron30,
    ncamarones133:this.totalCamaron31,
    ncamarones07:this.totalCamaron32,
    ncamarones39:this.totalCamaron33,

    totalPesosTotales:this.totalPesoTotal,
    pesoT215:this.pesoTotal1,
    pesoT205:this.pesoTotal2,
    pesoT202:this.pesoTotal3,
    pesoT195:this.pesoTotal4,
    pesoT189:this.pesoTotal5,
    pesoT182:this.pesoTotal6,
    pesoT176:this.pesoTotal7,
    pesoT169:this.pesoTotal8,
    pesoT163:this.pesoTotal9,
    pesoT155:this.pesoTotal10,  
    pesoT15 :this.pesoTotal11,
    pesoT143:this.pesoTotal12,
    pesoT137:this.pesoTotal13,
    pesoT13 :this.pesoTotal14,
    pesoT124:this.pesoTotal15,
    pesoT117:this.pesoTotal16,
    pesoT111:this.pesoTotal17,
    pesoT104:this.pesoTotal18,
    pesoT96:this.pesoTotal19,
    pesoT91:this.pesoTotal20,
    pesoT85:this.pesoTotal21,
    pesoT78:this.pesoTotal22,
    pesoT72 :this.pesoTotal23,
    pesoT65 :this.pesoTotal24,
    pesoT59:this.pesoTotal25, 
    pesoT52:this.pesoTotal26, 
    pesoT46:this.pesoTotal27, 
    pesoT33:this.pesoTotal28, 
    pesoT26:this.pesoTotal29, 
    pesoT2 :this.pesoTotal30,
    pesoT133:this.pesoTotal31,
    pesoT07:this.pesoTotal32,
    pesoT39:this.pesoTotal33,

    totalPorcentajes:this.totalPorc,
    porc1:this.porc1,
    porc2:this.porc2,
    porc3:this.porc3,
    porc4:this.porc4,
    porc5:this.porc5,
    porc6:this.porc6,
    porc7:this.porc7,
    porc8:this.porc8,
    porc9:this.porc9,
    porc10:this.porc10,
    porc11:this.porc11,
    porc12:this.porc12,
    porc13:this.porc13,
    porc14:this.porc14,
    porc15:this.porc15,
    porc16:this.porc16,
    porc17:this.porc17,
    porc18:this.porc18,
    porc19:this.porc19,
    porc20:this.porc20,
    porc21:this.porc21,
    porc22:this.porc22,
    porc23:this.porc23,
    porc24:this.porc24,
    porc25:this.porc25,
    porc26:this.porc26,
    porc27:this.porc27,
    porc28:this.porc28,
    porc29:this.porc29,
    porc30:this.porc30,
    porc31:this.porc31,
    porc32:this.porc32,
    porc33:this.porc33

  }

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


  //traer las ordenes de trabajo mediante el id enviado en el enlace
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

  //get analisis calidad por ID
  getAnalisisCalidad(id:number){
    this.analisisCalidadService.getAnalisisCalidadID(id)
    .subscribe(
      (res:any)=>{
        this.analisissCalidad = res.analisisCalidad
        console.log("Analisis Calidad Id", res.analisisCalidad)
      }
    ),
    (err:any)=>console.log(err)
  }

  //guardar analisis calidad y cerrar
  postAnalisisCalidadCerrar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Registro Guardado!',
      showConfirmButton: false,
      timer: 1500
    })
    this.analisisCalidadService.postAnalisisCalidad(this.AnalisisProducto)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/ordenTrabajo']);
      },
      err => console.log(err)
    ) 
  }

  //ingresar analisis calidad
  postAnalisisCalidad() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Registro Guardado!',
      showConfirmButton: false,
      timer: 1500
    })
    this.analisisCalidadService.postAnalisisCalidad(this.AnalisisProducto)
    .subscribe(
      res=> {
        console.log(res);
      },
      err => console.log(err)
    ) 
  }
}