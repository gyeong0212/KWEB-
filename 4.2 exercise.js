const seterror = element => element.innerText = 'Input Error!';
function displayTimes() {
    const number = document.getElementById('number').value;
    const text = parseInt(number);
    const timesresult = document.getElementById('times-result');


    if (text< 1 ||text> 9)
        return seterror(timesresult);

    const result = [];
    for(let i = 1; i < 10; i++ ){
        result.push(text + "X" + i + "=" + text * i);
    }
    timesresult.innerText = result.join("\n");
}