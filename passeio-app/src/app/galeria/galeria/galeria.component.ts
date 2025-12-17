import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  lugares: Lugar[] = [];
  categoriasFiltros: Categoria[] = [];

  nomePesquisa: string = "";
  categoriaPesquisa: string = "";

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ){ }

  ngOnInit(): void {
    this.lugarService.obterTodos()
      .subscribe({
        next: (listaLugares) => this.lugares = listaLugares,
        error: (erro) => console.error("Ocorreu um Erro: ", erro)
      });

    this.categoriaService.obterTodos()
      .subscribe({
        next: (listaCategorias) => this.categoriasFiltros = listaCategorias,
        error: (erro) => console.error("Ocorreu um Erro: ", erro)
      });
  }

  getTotalEstrelas(lugar: Lugar) : string{
    return "&#9733".repeat(lugar.avaliacao || 0) + "&#9734;".repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugarService.filtrar(this.nomePesquisa, this.categoriaPesquisa)
      .subscribe({
        next: (listaFiltrada) => this.lugares = listaFiltrada,
        error: (erro) => console.error("Ocorreu um Erro: ", erro)
      })
  }
}
