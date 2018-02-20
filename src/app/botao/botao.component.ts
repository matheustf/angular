import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'botao',
    templateUrl: './botao.component.html',
})
export class BotaoComponent {
    @Input() nome: string = 'OK';
    @Input() estilo: string = 'btn-dafult';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean;

    executaAcao() {
        if (this.confirmacao) {
            if (confirm("Deseja excluir?")) {
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }
}
