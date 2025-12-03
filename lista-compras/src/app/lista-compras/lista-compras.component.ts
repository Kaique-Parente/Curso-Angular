import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.id = this.lista.length + 1;
    itemLista.nome = this.item;

    this.lista.push(itemLista);
    this.item = "";
    console.table(this.lista);
  }

  riscarItem(item: ItemLista){
    item.isComprado = !item.isComprado;
  }

  limparLista(){
    this.lista = [];
  }
}
