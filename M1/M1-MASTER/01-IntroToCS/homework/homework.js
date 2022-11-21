'use strict';

function BinarioADecimal(num) {
   let array = num.split('').reverse();
   let swap = 0;
      for(let i = 0; i < array.length ; i++){
         swap += array[i] * 2 ** i;
      }
      return swap;
}

function DecimalABinario(num) {
   let array = [];
   let residuo = 0;
   // if ( num === 0 ){
   //    return '0';
   // }
 while(num >= 1){
   residuo = num  % 2;
   num /=  2;
  if(residuo  === 0){
    array.push('0')
  }
  else{
   array.push('1')
  }
 }
 return array.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
