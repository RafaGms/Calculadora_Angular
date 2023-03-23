import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  num1!: number;
  num2!: number;
  error!: string;
  calculo: number = 0;

  somar() {
    if (this.num1 != null || this.num2 != null) {
      this.calculo = this.num1 + this.num2;
    }
  }
  subtrair() {
    if (this.num1 != null || this.num2 != null) {
      this.calculo = this.num1 - this.num2;
    }
  }
  multiplicar() {
    if (this.num1 != null || this.num2 != null) {
      this.calculo = this.num1 * this.num2;
    }
  }
  dividir() {
    if (this.num1 != null || this.num2 != null) {
      if(this.num1 != 0 && this.num2 != 0){
        this.calculo = this.num1 / this.num2;
      }else{
        this.error = "Não existe divisão por 0"
      }
    }
  }
  limpar(){
    this.num1 = NaN;
    this.num2 = NaN;
    this.calculo = 0;
    this.error = "";
  }
}
