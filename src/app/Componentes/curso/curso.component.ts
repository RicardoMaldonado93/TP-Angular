import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICurso } from '../../Interfaces/icurso';
import { EnumEstado } from '../../Enums/enum-estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() unCurso : ICurso;
  @Output() cambiarEstado : EventEmitter<number>;

  constructor() { 
    this.cambiarEstado = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  Onclick($value:EnumEstado){
    this.unCurso.estado = $value;
  }
}
