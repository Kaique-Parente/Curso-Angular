import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  BASE_URL : string = "http://localhost:3000/lugares";

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar) : Observable<Lugar>{
    return this.http.post<Lugar>(this.BASE_URL, lugar);
  }

  obterTodos() : Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.BASE_URL);
  }

  filtrar(nome: string, categoria: string) : Observable<Lugar[]>{
    let parametros = new HttpParams();

    if(nome){
      parametros = parametros.set('nome_like', nome);
    }

    if(categoria){
      parametros = parametros.set('categoria', categoria);
    }

    return this.http.get<Lugar[]>(this.BASE_URL, {
      params: parametros
    })
  }
}
