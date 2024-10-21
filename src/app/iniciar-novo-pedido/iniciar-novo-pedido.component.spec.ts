import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarNovoPedidoComponent } from './iniciar-novo-pedido.component';

describe('IniciarNovoPedidoComponent', () => {
  let component: IniciarNovoPedidoComponent;
  let fixture: ComponentFixture<IniciarNovoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarNovoPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarNovoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
