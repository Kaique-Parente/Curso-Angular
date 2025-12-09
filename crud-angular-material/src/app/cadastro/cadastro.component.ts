import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatFormField } from '@angular/material/form-field'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgxMaskDirective
  ],providers:[
    provideNgxMask()
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);

  constructor(
    private service: ClienteService,
    private routeParams: ActivatedRoute,
    private route: Router
  ){

  }

  ngOnInit(): void {
    this.routeParams.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if(id){
        let clienteEncontrado = this.service.buscarClienteId(id);

        if(clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    })
  }

  salvar(){
    if(!this.atualizando){
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem("Salvo com sucesso!");
    }else{
      this.service.atualizarCliente(this.cliente);
      this.route.navigate(['/consulta']);
      this.mostrarMensagem("Atualizado com sucesso!");
    }
  }

  limpar(){
    this.cliente = Cliente.newCliente();
  }

  mostrarMensagem(mensagem: string) {
    this.snack.open(mensagem, "Ok");
  }
}
