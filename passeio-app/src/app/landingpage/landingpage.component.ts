import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private logginService: AuthgoogleService
  ) {}

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
    this.logginService.login();
  }

  //Ele não não está logado? Vai me retornar um boolean
  //Transformo variável em boolean
  isLoggedIn(): boolean {
    const dadosGoogle = this.logginService.getLoggedProfile();
    console.log('Dados Google:', dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
