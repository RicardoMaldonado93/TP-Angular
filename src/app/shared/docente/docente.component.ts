import { Component, OnInit, Input } from '@angular/core';
import { IDocente } from '../../Interfaces/idocente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  @Input() unDocente : IDocente;
  
  constructor() { }

  ngOnInit() {
  }

}
