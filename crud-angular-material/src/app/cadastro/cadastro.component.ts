import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatFormField } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
