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
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('style.color') cardColor : string;

  constructor() { 
   //this.cambiarEstado = new EventEmitter<EnumEstado>();
  }

  ngOnInit() {
  }

  Onclick($value){
    this.actualizarEstado.emit($value);
    if($value == 2 ){
      this.cardColor = 'red';
    }

    if!($value == 2){
      this.cardColor = 'black';
    }
  }
}
