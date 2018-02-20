import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from './../foto/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
})
export class ListagemComponent {

  fotos: FotoComponent[] = [];
  fotoService: FotoService;
  mensagem: string = '';

  constructor(fotoService: FotoService) {
    this.fotoService = fotoService;

    this.fotoService.lista()
      .subscribe(fotos => {
        this.fotos = fotos;
        console.log(this.fotos);
      }, erro => console.log(erro));
  }

  remove(foto: FotoComponent) {
    console.log(foto)
    this.fotoService.remove(foto)
      .subscribe(() => {
        let novasFotos = this.fotos.slice(0);
        let indice = novasFotos.indexOf(foto);
        novasFotos.splice(indice, 1);
        this.fotos = novasFotos;

        this.mensagem = 'Foto removida com sucesso';
      }, erro => {
        console.log(erro);
        this.mensagem = 'Não foi possível remover a foto';
      });
  }
}
