import { Time } from "@angular/common";


export interface ordenTrabajo{
    id: number;
    codigo: string;
    ordenCompra: string;
    proveedor: string;
    lote: number;
    procedencia: string;
    piscina:number;
    producto:string;
    camaronMar:boolean;
    observacion:string;
    estadoCalidad:string;
    
}