import {EnumEstado} from "../Enums/enum-estado.enum";

export interface ICurso {
    id:number;
    curso:string;
    inicio:DateTimeFormat;
    finalizacion: DateTimeFormat;
    estado:EnumEstado;
    profesor:string;
}
