import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  @Input() nome: string = ''; //Para receber um valor do HTML, é preciso adicionar o @Input na variável, e precisa ter o mesmo nome, ele esta sendo usado lá na contato.component.html

  @Input() telefone: string  = '';
}
