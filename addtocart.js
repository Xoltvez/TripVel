const product = [
    {
        id: 0,
        image: 'assets/jaket2.jpg',
        title: 'Jaket',
        price: 3,
    },
    {
        id:1,
        image: 'assets/jordan.jpeg',
        title: 'Nike Air Jordan',
        price: 2.5,
    },
    {
        id:2,
        image: 'assets/airpods.jpg',
        title: 'Air Pods Pro',
        price: 1.8,
    },
    {
        id:3,
        image: 'assets/camp3.jpg',
        title: 'Camp',
        price: 1.3,
    },
    {
        id:4,
        image: 'assets/camera.jpg',
        title: 'Canon EOS 250D',
        price: 8.3,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{image, title, price} = item;
    return(
        `<div class='box'>
           <div class='img-box'>
              <img class='images' src=${image}></img>
           </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}00.000</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" + 
        `</div>
        </div>`
    )
}).join('') 

var cart =[];
 
function addtocart(a){
    cart.push({...categories[a]}); 
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("Total").innerHTML ="Rp "+0+"00.000";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var{ image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML ="Rp "+total+"00.000";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>Rp ${price}00.000</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
