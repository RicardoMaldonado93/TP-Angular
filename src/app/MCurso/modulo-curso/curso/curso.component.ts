import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from '../../../Interfaces/icurso';
import { EnumEstado } from '../../../Enums/enum-estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
  
})
export class CursoComponent{

  @Input() unCurso : ICurso;
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('class.titulo') cardHeaderColor : Boolean = false;
  
  constructor() { 
  }

  Onclick($value){
    this.actualizarEstado.emit($value);
    if($value == 2 ){
      this.cardHeaderColor = true ;
    }

    if($value != 2 ){
      this.cardHeaderColor = false;
    }
    
    
  }
}
