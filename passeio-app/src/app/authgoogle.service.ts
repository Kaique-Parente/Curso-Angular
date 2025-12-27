import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc'
import { auth } from './auth.config'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private oauthService : OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  //O Google vai jogar o objeto aqui e vamos guardar esses dados
  //Por que signal e não a interface que eu criei, porque eu posso
  //Utilizar outras formas de autenticar sem ser o Google
  //Aqui eu estou configurando o OAuth2
  profile = signal<any>(null);

  constructor() {
    //Quando acessar o AuthgoogleService ele ja vai iniciar a configuração
    this.initConfiguration();
  }

  initConfiguration(){
    this.oauthService.configure(auth);
    //Mantem a sessão do usuário logado com o Google
    this.oauthService.setupAutomaticSilentRefresh();
    //Quando ele for logar ele vai pro Google depois volta, chamando esse método
    //Quando resolver o login ele vai fazer esse then
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      //a autenticação veio com um token valido?
      if(this.oauthService.hasValidIdToken()){
        //Esse set é porque ele é do tipo signal
        //pegar os dados de autenticação do usuário
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    });
  }

  login(){
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

  getLoggedProfile(){
    return this.profile();
  }
}
