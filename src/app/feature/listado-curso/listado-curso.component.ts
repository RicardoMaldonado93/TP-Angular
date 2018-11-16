import { Component, Output, Input } from '@angular/core';
import { ICurso } from '../../model/interfaces/icurso';
import { CursoService } from '../../core/service/curso.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css'],
  providers:[CursoService]
})
export class ListadoCursoComponent {

  @Input() ListaCursos:Array<ICurso>;
  @Output() lista:Array<ICurso> = [];

  public id: string;


  constructor(private route: ActivatedRoute, private r:Router, private service: CursoService ) {
    this.route.params.subscribe(
      params =>this.id = params['id']
    );
    
    this.route.queryParams.subscribe( query => query = this.ListaCursos);
   }

  ngOnInit() {
  
   this.service.getCurso().subscribe( resp => { this.ListaCursos = resp.body ; console.log(resp.body) });

  }
  
  onSelect(param){
    
    this.r.navigate(['/curso', param]);
  }
}
