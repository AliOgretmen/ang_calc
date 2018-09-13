import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-calc-field',
  templateUrl: './calc-field.component.html',
  styleUrls: ['./calc-field.component.css']
})
export class CalcFieldComponent implements OnInit {
  private firstValue: number;
  private secondValue: number;
  private operand: string;
  public displayValue: string;
 
 

  constructor(private calculateService: CalculateService) { }

  ngOnInit() {
    this.reset();
    
  }
  reset(){
    this.firstValue = null;
    this.secondValue = null;
    this.operand = null;
    this.setDisplayValue(0);
  }

  getValue(value){
    if(isNaN(parseInt(value, 10))){
      if(value === "="){
        this.operation(this.operand);
      } else if(value === 'C'){
        this.reset();
      } else {
        this.operand = value;
      }
        return;
    }

    if(!this.firstValue){
      this.firstValue = parseInt(value, 10);
      this.setDisplayValue(this.firstValue);
      return;
    }
    if(!this.secondValue){
      this.secondValue = parseInt(value, 10);
      this.setDisplayValue(this.secondValue);
      return;
    }
  }

  operation(value){
    let result = 0;
    switch(value){
      case '+':
      result = this.calculateService.add(this.firstValue, this.secondValue);
      break;
      case '-':
      result = this.calculateService.subs(this.firstValue, this.secondValue);
      break;
      case '*':
      result = this.calculateService.mult(this.firstValue, this.secondValue);
      break;
      case '/':
      result = this.calculateService.divs(this.firstValue, this.secondValue)
      break;
      default:
        throw new Error('new operations?')
      
    }
    this.setDisplayValue(result);
  }
  setDisplayValue(value){
    this.displayValue = value + '';
  }
}
