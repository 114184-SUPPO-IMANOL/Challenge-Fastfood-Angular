import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-punto-de-entrega',
  templateUrl: './punto-de-entrega.component.html',
  styleUrls: ['./punto-de-entrega.component.css']
})
export class PuntoDeEntregaComponent {
  @Input() pedidosIngresados: Pedido[] = []; 
  @Input() pedidosTerminados: Pedido[] = [];

  public onEntregarPedido(event: Pedido){
    let indice: number = this.pedidosTerminados.indexOf(event);
    this.pedidosTerminados.splice(indice, 1);
  }
}

class Pedido {
  numero: number;
  nombre: string;
  descripcion: string;

  constructor(numero: number, nombre: string, descripcion: string) {
    this.numero = numero;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
