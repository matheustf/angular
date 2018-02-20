import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { PainelModule } from './painel/painel.module'
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BotaoModule } from './botao/botao.module';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BotaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
