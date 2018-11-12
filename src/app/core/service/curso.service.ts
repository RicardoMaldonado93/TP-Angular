import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICurso } from '../../model/interfaces/icurso';
import { CursoComponent } from 'src/app/feature/curso-item/curso-item.component';
import { Observable } from 'rxjs';
import { ListadoCursoComponent } from 'src/app/feature/listado-curso/listado-curso.component';


 
@Injectable({
  providedIn: 'root'
})

export class CursoService {

  item: ICurso;
  private URL:string = 'http://demo3744158.mockable.io/cursos';

  constructor( private http: HttpClient ) {
     
   }
   
  getCurso(): Observable<any>{
    return this.http.get(this.URL);
  }
  }
