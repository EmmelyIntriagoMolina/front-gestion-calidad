import { Time } from "@angular/common";

export interface GuiaRemision{
    codigo:number,
    horaIngreso: Time,
    placa: string,
    chofer:string,
    peso:number,
    gavetas:number,
    muestra:number,
    estado:boolean
}