import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { IniciarNovoPedidoComponent } from './iniciar-novo-pedido/iniciar-novo-pedido.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { RemoverProdutoComponent } from './remover-produto/remover-produto.component';
import { FecharPedidoComponent } from './fechar-pedido/fechar-pedido.component';

// Definindo as rotas
export const routes: Routes = [
  { path: 'listar-pedidos', component: ListarPedidosComponent },
  { path: 'iniciar-novo-pedido', component: IniciarNovoPedidoComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent },
  { path: 'remover-produto', component: RemoverProdutoComponent },
  { path: 'fechar-pedido', component: FecharPedidoComponent },
  { path: '', redirectTo: 'listar-pedidos', pathMatch: 'full' },
];

// Módulo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
