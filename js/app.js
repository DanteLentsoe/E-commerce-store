


/*#########################
Chart Showcase on Nar Bar
##########################*/

narCharMenu();


function narCharMenu(){
const cart_information = document.getElementById('cart-info');
const cart_catalog = document.getElementById('cart-catalouge');

cart_information.addEventListener('click', function(){
    cart_catalog.classList.toggle('show-cart');
})

};



/*########################
     Addition of items
##########################*/

$(function(){
    const addItemToChart = document.querySelectorAll('.store-item-icon');

    addItemToChart.forEach(function(buttonItem) {
      buttonItem.addEventListener('click', function(event) {
          
        if (event.target.parentElement.classList.contains('store-item-icon')){
            let img_path_item_select = event.target.parentElement.previousElementSibling.src;
                      

            //integer of 3 is added to remove the 3 characters of 'img' in order to access different image folder
            
            let img_pos = img_path_item_select.indexOf("img") +3;
            

            let path_img_small = img_path_item_select.slice(img_pos);

            

            //objects containing prices and image path

            const cartItems = {};

            cartItems.img = `img-cart${path_img_small}`;

            //name item

            let nameItem = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
            
            cartItems.nameItem = nameItem;
            

            //price of item

            let itemPrice = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;


            //price removal of space and "R" Sign

            let itemPriceFinal = itemPrice.slice(1).trim();

            cartItems.itemPrice = itemPriceFinal;
            //let cartNameinDOM = '';

            console.log(cartItems);


            const cartNameinDOM  = document.createElement("div");

            cartNameinDOM.classList.add("cart-item", 
            "d-flex", 
            "justify-content-between",
             "text-capitalize", 
             "my-3");
            

            cartNameinDOM.innerHTML =
            `
            <img src="${cartItems.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="cart-item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${cartItems.nameItem}</p>
              <span>R</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${cartItems.itemPrice}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
           
          document.body.appendChild(cartNameinDOM);
          const cartSelection_Category = document.getElementById('cart-catalouge');
          const cartTotal = document.querySelector(".cart-total-container");


          cartSelection_Category.insertBefore(cartNameinDOM, cartTotal)
          alert('Item added to cart');
          displayTotal();
          cartRemove();
        }
          
      });
      });

      // Computation of chart list function
           
      function displayTotal(){
          
        const totalCartPrice = [];
        const single_price = document.querySelectorAll(".cart-item-price");

        single_price.forEach(function(value){
            totalCartPrice.push(parseFloat(value.textContent))
        });

        const finalPriceTotal = totalCartPrice.reduce(function(totalCartPrice, value) {
            
            totalCartPrice += value;

            return totalCartPrice;
        }, 0);

       const roundedPrice = finalPriceTotal.toFixed(2);

       document.getElementById('cart-total').textContent = roundedPrice;
       document.querySelector('.item-total').textContent = roundedPrice;
       document.getElementById('item-count').textContent = totalCartPrice.length;

    
 
      }
    });



function cartRemove(){
    const btnDeleteItems = document.getElementsByClassName('cart-item-remove');
    console.log(btnDeleteItems);

    for (let x = 0; x < btnDeleteItems.length; x++)
    {
        const clicking = btnDeleteItems[x];
        clicking.addEventListener('click', function(evt){

            const removeBtnClicked = evt.target;

            removeBtnClicked.parentElement.parentElement.remove();

            displayTotal();
            
        })
    }
}





function chartUpdateTotal(){

const cartContainer = document.getElementsByClassName('store-item-icon')[0];

const specCart = cartContainer.getElementsByClassName('cart-item');

  for (let x = 0; x < specCart.length; x++){
      
    const  cartNewTotal = cartNewTotal[x];

    const priceSingleCart = cartNewTotal
  }

}
/*let itemImg = event.target.parentElement.previousElementSibling;

itemImg.classList.add('opacity');

and then i created a class in css .opacity {
opacity: 0.3;
} */