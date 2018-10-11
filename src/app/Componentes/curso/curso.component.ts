import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from '../../Interfaces/icurso';
import { EnumEstado } from '../../Enums/enum-estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() unCurso : ICurso;
  @Output() cambiarEstado : EventEmitter<EnumEstado>;
  @HostBinding('style.color') isActive : string;

  constructor() { 
    this.cambiarEstado = new EventEmitter<EnumEstado>();
  }

  ngOnInit() {
  }

  Onclick($value:EnumEstado){
    this.unCurso.estado = $value;
    //this.unCurso.estado = this.cambiarEstado.emit($value);
    
    console.log(this.unCurso.estado + $value);
  }
}
