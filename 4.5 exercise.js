const itemprices = {
    apple: 700,
    orange: 800,
    lemon: 900
};

let totalprice = 0;
const addtocart = document.getElementsByClassName('add-to-cart');

for(const element of addtocart) {
    element.addEventListener('click', handleItemClick);
}

function handleItemClick(event){
    const item = event.target.parentNode.parentNode.getAttribute('id');
    const itemcost = itemprices[item];
    totalprice += itemcost;
    document.getElementById('cost').innerText = totalprice;
}