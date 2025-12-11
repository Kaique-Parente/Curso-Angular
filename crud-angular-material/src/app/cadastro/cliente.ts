import { v4 as uuid } from 'uuid'

export class Cliente{
  id?: string;
  nome?: string;
  email?: string;
  cpf?: string;
  dataNascimento?: string;
  isDeletando: boolean = false;
  uf?: string;
  municipio?: string;

  static newCliente(){
    const cliente = new Cliente();
    cliente.id = uuid();
    return cliente;
  }
}
