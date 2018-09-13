import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  add(a, b){
    return a + b;
  }

  subs(a, b){
    return a - b;
  }

  mult(a, b){
    return a*b;
  }

  divs(a, b){
    if(b === 0){
      throw new Error('undefined')
    }
    return a / b;
  }

}
