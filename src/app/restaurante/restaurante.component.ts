import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

 pedidosIngresados: Pedido[] = [];
 pedidosTerminados: Pedido[] = [];

 public onIngresarPedido(event: Pedido){
  this.pedidosIngresados.push(event);
 }
 
 public onPedidoTerminado(event: Pedido){
  this.pedidosTerminados.push(event);
  let indice: number = this.pedidosIngresados.indexOf(event);
 /* if(indice !++ -1){
    this.pedidosIngresados.splice(indice, 1)
  }*/
 }
}

class Pedido
{
  numero: number; // Numero de pedido
  nombre: string;  // Nombre del cliente
  descripcion: string;  // Descripción del pedido

  constructor(numero: number, nombre: string, descripcion: string){
    this.numero = numero;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

