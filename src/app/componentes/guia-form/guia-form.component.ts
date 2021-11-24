import { Component, OnInit } from '@angular/core';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { GuiaRemision } from 'src/app/models/guiaRemision';

@Component({
  selector: 'app-guia-form',
  templateUrl: './guia-form.component.html',
  styleUrls: ['./guia-form.component.css']
})
export class GuiaFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  guiaRemision:GuiaRemision={
    id:0,
    codigo:0,
    horaingreso: '',
    placa: '',
    chofer:'',
    peso:0,
    gavetas:0,
    muestra:0,
    estado:false
  }
  guardarGuia(){
    
  }

}
