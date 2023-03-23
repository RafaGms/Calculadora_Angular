import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  soma: number = 0;

  somar(){
this.soma = this.num1 + this.num2;
  }
}
