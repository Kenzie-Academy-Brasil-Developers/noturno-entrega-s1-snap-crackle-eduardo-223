function check (Value){  //Verifica se o numero e primo
    let divisor = 0;
    
      for(let index = 1; index <= Value; index++){
  
        if(Value % index === 0){
          divisor++;
        }
       }
      if(divisor == 2){
        return 'prime';
  
      }else{
        return Value;
      }
  }      
////////////////////////////////////////////////////////////////////////////////////////////

function snapCracklePrime (maxValue){

    let meuRetorno = [];

    for(let index = 1; index <= maxValue; index++){
        if(index % 2 === 1 && index % 5 === 0 && check(index) === 'prime'){
          meuRetorno.push('snapCracklePrime');
        }

        else if(index % 2 === 1 && check(index) === 'prime'){
          meuRetorno.push('snapPrime');
        }

        else if(index % 2 === 1 && index % 5 === 0 ){
            meuRetorno.push('snapCrackle');
        }

        else if (index % 5 === 0 && check(index) === 'prime'){
          meuRetorno.push('cracklePrime');
        }

        else if(index % 5 === 0){
            meuRetorno.push('crackle');
        }

        else if(index % 2 === 1){
            meuRetorno.push('snap');
        } 

        else if(check(index) === 'prime'){
             meuRetorno.push('prime');
        }

        else{
           meuRetorno.push(index);
        }
    }

      return meuRetorno.join(', ');

}

console.log(snapCracklePrime(15));


