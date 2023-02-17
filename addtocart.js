const product = [
    {
        id: 0,
        image: 'images/buy-1.jpg',
        title: 'Red Printed T-shirt',
        price: '$50.00',
    },
    {
        id: 1,
        image: 'images/buy-2.jpg',
        title: 'Shoes',
        price: '$50.00',

    },
    {
        id: 2,
        image: 'images/buy-3.jpg',
        title: 'Pants',
        price: '$70.00'
    }
];

const categories = [...new set(product.map((item) => { return item }))]
let i = 0;
document.getElementById("root").innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
               <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${price}.00</h2>+
                    "<buttom onclick='addtocart("+(i++)+")'>Add to cart</buttom>"+
                </div>
            </div>`
    )
})
