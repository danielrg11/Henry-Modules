'use strict';

function BinarioADecimal1(num) {
   let array = num.split('').reverse();
   let swap = 0;
      for(let i = 0; i < array.length ; i++){
         swap += array[i] * 2 ** i;
      }
      return swap;
}
console.log(BinarioADecimal1("11110000110"))

// Binario a decimal con recursividad 
function BinarioADecimal(str,i){
 let n = str.length ; // 1101 length = 4 / n=4
 if (i == n-1){      // if 3 == 3 = true
   return str[i] -''; // true // 8/4/0/1 = '13'
 }
 return ( str[i] << (n-i-1)) + BinarioADecimal(str,i+1); // 8//4//0//1
} 



console.log(BinarioADecimal("1101",0))

// function BinarioADecimal(str,i){
//    let n = str.length;
//    let resul = 0
//    if(str.length === 0){
//       return resul ;
//    }
//    return 
// }
// console.log(BinarioADecimal('1010',0))



function DecimalABinario(num) {
   let array = [];
   let residuo = 0;
    if ( num === 0 ){
      return '0';
    }
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
// Decimal A Binario con Recursividad
function DecimalABinario(num) {
   if (num === 1){return '1';}
   if (num === 0){return '0';}
 return DecimalABinario(Math.floor(num / 2)) + (num%2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
