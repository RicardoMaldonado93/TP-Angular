import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICurso } from '../../model/interfaces/icurso';
import { CursoComponent } from 'src/app/feature/curso-item/curso-item.component';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observer'; 


 
@Injectable({
  providedIn: 'root'
})

export class CursoService {

  item: Observable<ICurso[]>;
  private URL:string = 'http://demo3744158.mockable.io/cursos';

  constructor( private http: HttpClient ) {
     
   }
   
  getCurso(){
    return this.http.get<ICurso[]>(this.URL, { observe : 'response'});
  }

  getUnCurso(param:number){
    return this.item = this.http.get<ICurso[]>(this.URL, { observe : 'response'});
  }

  
}
