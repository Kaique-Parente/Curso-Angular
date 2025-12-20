import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router){ }

  navegar(){
    this.router.navigate(['/paginas/galeria'])
  }

  logarComGoogle(){

  }

  //Ele não não está logado? Vai me retornar um boolean
  //Transformo variável em boolean
  isLoggedIn() : boolean{
    return !!this.profile;
  }

}
