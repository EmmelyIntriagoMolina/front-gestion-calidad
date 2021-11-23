import { Time } from "@angular/common";

export interface GuiaRemision{
    id:number,
    codigo:number,
    horaingreso: string,
    placa: string,
    chofer:string,
    peso:number,
    gavetas:number,
    muestra:number,
    estado:boolean
}