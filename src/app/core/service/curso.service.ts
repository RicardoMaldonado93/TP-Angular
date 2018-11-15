import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICurso } from '../../model/interfaces/icurso';
import { Observable } from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})

export class CursoService {

  item: ICurso;
  private URL:string = 'http://demo3744158.mockable.io/cursos';

  constructor( private http: HttpClient ) {
    
   }
   
  getCurso(param?):Observable<HttpResponse<ICurso[]>>{

    return this.http.get<ICurso[]>(this.URL, {observe:'response'});
  }

  
}
