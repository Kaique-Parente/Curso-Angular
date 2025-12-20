import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  //Qual o servidor que fez a autenticação?
  //Ela verifica se essa autenticação está válida, se esse token está valido e se esse lugar é confiável
  issuer: 'https://accounts.google.com',

  //Para onde vai redicionar? Vai redirecionar pelo mesmo lugar de origem, o nosso site http://localhost:4200 configurada na google cloud
  redirectUri: window.location.origin,
  clientId: '844395836708-d6q4latvmbnvt890sd8vc2uajgmnka4c.apps.googleusercontent.com',
  //O que ele vai ter acesso?
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
