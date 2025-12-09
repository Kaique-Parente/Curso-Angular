import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = '_CLIENTES';

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  atualizarCliente(cliente: Cliente){
    const storage = this.obterStorage();
    storage.forEach((c) => {
      if(c.id === cliente.id){
        Object.assign(c, cliente);
      }
    })

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  deletar(cliente: Cliente){
    const storage = this.obterStorage();
    const clientesAtualizados  = storage.filter(c => c.id !== cliente.id);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientesAtualizados));
  }

  pesquisarClientes(nomeBusca: string) : Cliente[]{
    const clientes = this.obterStorage();

    if(!nomeBusca){
      return clientes;
    }

    return clientes.filter(cliente => cliente.nome?.toLowerCase().includes(nomeBusca.toLowerCase()));
  }

  buscarClienteId(id: string) : Cliente | undefined{
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id);
  }

  listarClientes() : Cliente[]{
    return this.obterStorage();
  }

  private obterStorage() : Cliente[]{
    const respositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(respositorioClientes){
      const clientes: Cliente[] = JSON.parse(respositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = []
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
