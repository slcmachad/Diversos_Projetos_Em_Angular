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
          this.clearAll();
          return
        }
        this.resultado /= valorAtual;
        break;
      default:
        this.resultado = valorAtual;
        break;
    }

    if(this.resultado.toString().length > 8){
      this.displayValue = 'Err';
      this.clearAll();
      return
    }

    this.inputAtual = this.resultado.toString();
    this.displayValue = this.inputAtual;
  }

  limpar() {
    if(this.inputAtual.length > 1){
      this.inputAtual = this.inputAtual.slice(0, 1);
      this.displayValue = this.inputAtual;
    }else{
      this.clearAll();
    }
  }

  clearAll() {
    this.displayValue = '0';
    this.inputAtual = '0';
    this.operadorAtual = '';
    this.resultado = 0;
  }
}
