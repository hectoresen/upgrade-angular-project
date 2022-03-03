import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    var num = value;
    var myArr = String(num).split("").map((num)=>{
      return Number(num)
    })
    if(value === null){
      return '../../../../assets/credit-card.png'
    }else if(myArr[0] === 4){
      return '../../../../assets/visa.png'
    }else if((myArr[0] === 5) && (myArr[1] <= 5)){
      return '../../../../assets/mastercard.png'
    }else if((myArr[0] === 3) && (myArr[1] === 4 || 7)){
      return '../../../../assets/american-express.png'
    }else if((myArr[0] === 5 || 6) && (myArr[1] === 0 || 6 || 7)){
      return '../../../../assets/maestro.png'
    }else{
      return '../../../../assets/credit-card.png'
    }
  }
}
