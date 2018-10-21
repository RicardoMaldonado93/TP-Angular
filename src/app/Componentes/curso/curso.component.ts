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
  //@Output() cambiarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('style.color') cardColor : string;

  constructor() { 
   //this.cambiarEstado = new EventEmitter<EnumEstado>();
  }

  ngOnInit() {
  }

  /*Onclick($value){
    //this.unCurso.estado = $value;
    this.cambiarEstado.emit(this.unCurso.estado = $value);
    

    /*if (this.unCurso.estado == 2){
      this.cardColor = 'red';
    }

    if !(this.unCurso.estado == 2){
      this.cardColor = 'black';
    }

    console.log(this.unCurso.estado);
  }*/
  Onclick($value){
    this.actualizarEstado.emit($value);
  }
}
