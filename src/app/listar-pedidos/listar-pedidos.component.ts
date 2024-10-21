import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListarPedidosComponent {
removerPedido(arg0: number) {
throw new Error('Method not implemented.');
}
  pedidos = [
    { id: 1, cliente: 'João', total: 150.0, status: 'Aberto' },
    { id: 2, cliente: 'Maria', total: 200.0, status: 'Fechado' },
  ];
}
