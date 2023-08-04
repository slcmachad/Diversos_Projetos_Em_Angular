import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  displayValue = '0';
  currentInput = '0';
  currentOperator = '';
  resultado = 0;

  appendToDisplay(value: string): void{
    if(this.currentInput.length < 8){
      if(this.currentInput === '0' && value !== '.'){
        this.currentInput = value;
      }else {
        this.currentInput += value;
      }
      this.displayValue = this.currentInput;
    }
  }


  performOperation(operator: string): void{
    this.calculate();
    this.currentOperator = operator;
    this.currentInput = '0';
  }

  calculate(): void{
    throw new Error('Method not implemented.');
  }

}