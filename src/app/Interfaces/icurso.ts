import {EnumEstado} from "../Enums/enum-estado.enum";
import { DatePipe } from "@angular/common";

export interface ICurso {

    id:number;
    curso:string;
    inicio:Date;
    finalizacion: Date;
    estado:EnumEstado;
    profesor:string;
}
