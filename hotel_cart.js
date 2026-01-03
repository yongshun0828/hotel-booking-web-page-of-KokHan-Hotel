const product =[
  {
      id: 0,
      image: 'Standard_Room.jpg',
      title:'Standard Room',
      price: 210,
  },
  {
      id: 1,
      image: 'Deluxe_City_View_Room.jpg',
      title:'Deluxe City View Room',
      price: 350,
  },
  {
      id: 2,
      image: 'Deluxe_Family_Room.jpg',
      title:'Deluxe Family Room',
      price: 470,
  },
  {
    id: 3,
    image: 'Luxury_Room.jpg',
    title:' Luxury Room',
    price: 520,
  },
  {
    id: 4,
    image: 'Deluxe_Seaview.jpg',
    title:'Deluxe Seaview',
    price: 610,
  },
  {
    id: 5,
    image: 'Premier_Sea.jpg',
    title:'Premier Sea',
    price: 800,
  },
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
            <a href='hotel_booking.html'>
              <img class='images' src=${image} ><img>
            </a>
          </div>
          
      <div class='buttom'>
      <p>${title}<p>
      <h2>RM ${price}.00</h2><button onclick='addtocart(${i++})'>BOOK NOW</button></div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}
function displaycart(a){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "RM "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "RM "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowing' src=${image}>
              </div>
              <p style='font-size: 12px;'>${title}</p>
              <h2 style='font-size: 15px;'>RM ${price}.00<h2>`+
              "<img class='delete' src='delete.jpg' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }
}

// Store the total costs in localStorage
localStorage.setItem('total', JSON.stringify(totalCosts));
function noPay(){
  if (total==0){
    alert("No item in your cart");
    window.location.href='hotel_cart.html';
  }
}

function completePay(){
  alert("Please proceed to the payment page to done your booking");
  window.location.href='hotel_py.html';
}