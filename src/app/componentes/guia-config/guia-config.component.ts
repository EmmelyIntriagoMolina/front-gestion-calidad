import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guia-config',
  templateUrl: './guia-config.component.html',
  styleUrls: ['./guia-config.component.css']
})
export class GuiaConfigComponent implements OnInit {

  guiasRemision: any = []
  ordenesTrabajo: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
