function getDivisors(num){
    const divisors = [];
    for( let index = 0; index < Math.sqrt(num+1); index++){
        if(num%index === 0 ){
            divisors.push(index,num/index);
        }
        else if(index * index === num){
            divisors.push(index);
        }
    }
    return divisors.sort((first, second) => first - second);
}

