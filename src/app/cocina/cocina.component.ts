import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  @Input() pedidosIngresados:  Pedido[] = []; 
  @Output() pedidoTerminado: EventEmitter<Pedido> = new EventEmitter();
  pedidosCoccion: Pedido[] = [];



  public onPasarCoccion(pedido: Pedido){
    if(this.pedidosCoccion.length == 0){
      let indice: number = this.pedidosIngresados.indexOf(pedido);
      this.pedidosIngresados.splice(indice, 1);
      this.pedidosCoccion.push(pedido);
    }

  }

  public onEntregarPedido(){
    if(this.pedidosCoccion.length != 0){
      this.pedidoTerminado.emit(this.pedidosCoccion.pop())
    }
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
