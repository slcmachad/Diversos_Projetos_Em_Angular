import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  displayValue = '0';
  inputAtual = '0';
  operadorAtual = '';
  resultado = 0;

  appendToDisplay(value: string): void{
    if(this.inputAtual.length < 8){
      if(this.inputAtual === '0' && value !== '.'){
        this.inputAtual = value;
      }else {
        this.inputAtual += value;
      }
      this.displayValue = this.inputAtual;
    }
  }

  performOperation(operator: string): void{
    this.calcular();
    this.operadorAtual = operator;
    this.inputAtual = '0';
  }

  calcular(): void{
    const valorAtual = parseFloat(this.inputAtual);

    switch(this.operadorAtual){
      case '+':
        this.resultado += valorAtual;
        break;
      case '-':
        this.resultado -= valorAtual;
        break;
      case '*':
        this.resultado *= valorAtual;
        break;
      case '/':
        if(valorAtual === 0){
          this.displayValue = 'ERR';
          this.resetarCalculadora();
          return
        }
        this.resultado /= valorAtual;
        break;
      default:
        this.resultado = valorAtual;
        break;
    }
  }
  resetarCalculadora() {
    throw new Error('Method not implemented.');
  }

  limpar() {
    throw new Error('Method not implemented.');
  }

  clearAll() {
  throw new Error('Method not implemented.');
  }
}
