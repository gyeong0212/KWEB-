function setRandomBgColor(){
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    const randomcolor = `rgb(${red}, ${green}, ${blue})`;

    document.getElementById('color-box').style.backgroundColor = randomcolor;
};
