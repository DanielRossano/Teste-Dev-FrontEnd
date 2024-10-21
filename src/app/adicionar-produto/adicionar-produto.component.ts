import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css'],
  standalone: true,  // Torna o componente standalone
  imports: [FormsModule, CommonModule],  // Importa os módulos necessários
})
export class AdicionarProdutoComponent {
  produto = { descricao: '', preco: 0 };

  adicionarProduto() {
    console.log('Produto adicionado:', this.produto);
    // Lógica para adicionar o produto ao pedido
  }
}
