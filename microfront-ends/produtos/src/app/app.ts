import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Camiseta Angular Developer',
      valor: 79.9,
      imagem: 'https://i.etsystatic.com/53087220/r/il/b694b8/6076339482/il_fullxfull.6076339482_q30i.jpg',
    },
    {
      nome: 'Caneca Programador Raiz',
      valor: 39.9,
      imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbng-lnsodofk74j475_tn.webp',
    },
    {
      nome: 'Camiseta Todo mundo odeia o JavaScript',
      valor: 79.9,
      imagem: 'https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/c25b764c941a9550bef84261fa562ac5.webp',
    },
    {
      nome: 'Caneca Keep Calm and Code',
      valor: 34.9,
      imagem: 'https://i.etsystatic.com/41697929/r/il/127450/7143207884/il_570xN.7143207884_omym.jpg',
    },
    {
      nome: 'Camisa Full Stack Developer',
      valor: 97.9,
      imagem: 'https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/94eda0898023c5110f270508f0279799.webp',
    },
    {
      nome: 'Mouse Pad Software Developer',
      valor: 34.9,
      imagem: 'https://cdn.awsli.com.br/2500x2500/608/608801/produto/154530595/0f19490a2c.jpg',
    },
    {
      nome: 'Caderno Programador Function Repeat',
      valor: 49.9,
      imagem: 'https://images.tcdn.com.br/img/img_prod/681327/caderno_programador_function_repeat_7769_1_cdd31aa664f51d86ce0f7716361c2391.jpg',
    },
    {
      nome: 'Adesivos Programação Pack',
      valor: 39.9,
      imagem: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQc-noCHJBTof7-3U-AVNqlQUZpSg3ppgaN8E-sWX7HZLVKfqsXHE9swOKseW5C8lsQ_vdr-NCwu_vzuQ5qyr7OgBL2Dg5W6Q',
    },
    {
      nome: 'Camisa Clean Code',
      valor: 96.9,
      imagem: 'https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/e2d74eae31a86cb2e2d41043a1e673be.webp',
    },
    {
      nome: 'Caneca Debug Mode',
      valor: 33.9,
      imagem: 'https://cdn.awsli.com.br/600x450/1225/1225697/produto/183601695/8c4a4b26b0.jpg',
    },
    {
      nome: 'Mochila Tech para Notebook',
      valor: 139.9,
      imagem: 'https://fotos.oceanob2b.com/High/041108.jpg',
    },
    {
      nome: 'Suporte para Notebook Alumínio Dobrável E Portátil Slim',
      valor: 45.9,
      imagem: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/300266/Suporte-Alum-nio-Dobr-vel-E-Port-til-Slim-Para-Notebook-E-Macbook_1668631731_gg.jpg',
    },
  ];
}
