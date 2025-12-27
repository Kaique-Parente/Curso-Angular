import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  BASE_URL : string = environment.apiUrl + '/categorias';

  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>(this.BASE_URL, categoria);
  }

  obterTodos() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.BASE_URL);
  }
}
