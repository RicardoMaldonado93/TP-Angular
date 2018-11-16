import { Component, Input, Output, EventEmitter, HostBinding, OnInit } from '@angular/core';
import { ICurso } from '../../model/interfaces/icurso';
import { EnumEstado } from '../../model/enums/enum-estado.enum';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/core/service/curso.service';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css']
  
})
export class CursoComponent implements ICurso{

  id: number;
  titulo: string;
  fechaInicio: number;
  fechaFin: number;
  asistentes: string[];
  profesor: string[];
  laboratorio: number;
  estado: number;

  @Input() unCurso : ICurso;
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('class.titulo') cardHeaderColor : Boolean = false;
  

  constructor ( private route: ActivatedRoute, private servicio: CursoService){}


  ngOnInit(){
    this.unCurso = { 
      id: 0,
      titulo: '',
      fechaInicio: 0,
      fechaFin: 0,
      asistentes: [],
      profesor: [],
      laboratorio: 0,
      estado: 0,
    
    }
     
      this.route.paramMap.subscribe( params => {
         let id = +params.get('id');
         this.servicio.getUnCurso(id).subscribe(data => { this.unCurso = data.body.find( a => a.id == id), console.log(data)} );
      })

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
