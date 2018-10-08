import {EnumEstado} from "../Enums/enum-estado.enum";

export interface ICurso {

    id:number;
    curso:string;
    inicio:Date;
    finalizacion: Date;
    estado:EnumEstado;
    profesor:string;
}
