import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class POSComponent {
  @Output() pedidoIngresado: EventEmitter<Pedido> = new EventEmitter();
  nombre: string = "";
  descripcion: string = "";
  numero: number = 0;

  public onNombre(event: any){
    this.nombre = event.target.value;
  }

  public onPedido(event: any){
    this.descripcion = event.target.value;
  }

  public enviarPedido() {
    this.numero ++;
    let pedido: Pedido = new Pedido(this.numero, this.nombre, this.descripcion)
    this.pedidoIngresado.emit(pedido); // Aquí se emite un objeto Pedido
 
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
