function isvalidnumber(num) {
    if(num >= 1 && num <= 9 && num % 1 === 0){
        return true;
    }
    return false;
}