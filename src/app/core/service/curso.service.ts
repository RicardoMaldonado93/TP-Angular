import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://demo3744158.mockable.io/cursos');
  }
}
