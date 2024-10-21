import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-novo-pedido',
  templateUrl: './iniciar-novo-pedido.component.html',
  styleUrls: ['./iniciar-novo-pedido.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class IniciarNovoPedidoComponent {
  novoPedido = { cliente: '', produtos: [], total: 0 };

  iniciarPedido() {
    console.log('Pedido iniciado:', this.novoPedido);
    // Lógica para salvar o pedido
  }
}
