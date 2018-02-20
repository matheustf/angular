import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from './../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  meuForm: FormGroup;
  fotoService: FotoService;
  route: ActivatedRoute;
  router: Router;
  mensagem: string = '';

  constructor(fotoService: FotoService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router) {
    this.fotoService = fotoService;

    this.router = router;
    
    this.route = route;
    this.route.params.subscribe(params => {
        let id = params['id'];
        console.log(id);
        
        if(id){
          this.fotoService
            .buscarPorId(id)
            .subscribe(foto => this.foto = foto, erro => console.log(erro));
        }
    })
    
    this.meuForm = formBuilder.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: ['']
    })
  }

  cadastrar(event: Event) {

    event.preventDefault();
    console.log(this.foto);

    this.fotoService
      .cadastra(this.foto)
      .subscribe(res => {
        this.mensagem = res.mensagem;
        this.foto = new FotoComponent();
        if(!res.inclusao){
          this.router.navigate(['']);
        }
      }, erro => console.log(erro));
  }


}
