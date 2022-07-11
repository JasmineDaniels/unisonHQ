function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
  cartTotal()
});

//Remove Item Buttons
let rmItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < rmItemButtons.length; i++) {
    let button = rmItemButtons[i];
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event){
  let btnClicked = event.target;
        //btnClicked.parentElement.parentElement.parentElement.parentElement.remove()
        btnClicked.parentElement.parentElement.parentElement.remove()
        console.log(`clicked`)
        updateCartTotal()
}

//Quantity Buttons
let quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (const input of quantityInputs){
  input.addEventListener('change', quantityChanged)
}

function quantityChanged(event){
  let input = event.target
  // if input is not a number or less than 0, input value is 1 
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}

// Add/Minus Quantity Buttons
// let quantityBtns = document.getElementsByClassName('cart-quantity-btn');
// for (const btn of quantityBtns){ // for loop 
//   btn.addEventListener('click', (event) => {
//     //let btn = event.target;

//     let quanity1 = document.getElementsByClassName('cart-quantity-input')[0].value
//     let quanity2 = document.getElementsByClassName('cart-quantity-input')[1].value
//     quanity1 = event.target;
//     quanity2 = event.target;

//     updateCartTotal(quanity1)
//     updateCartTotal(quanity2)
//     //updateCartTotal(btn)
//   })
// }

//Purchase Button 
let purchaseBtn = document.getElementsByClassName('btn-purchase')[0];
purchaseBtn.addEventListener('click', () => {
  console.log(`I was clicked`)
  alert(`Thank you for your purchase`)
})

    
// So cartTotal is displayed on page load 
function cartTotal(){
    //[array of items]
    let cartContainer = document.getElementsByClassName('cart-items')[0]
    //will get all the cart rows in the container cartRows.length is 2
    let cartRows = cartContainer.getElementsByClassName('cart-row')
    const stateTax = 0.08
    let total = 0
    //the price and quanity of both rows
    let barCoursePriceEl = cartRows[0].getElementsByClassName('cart-price')[0]
    let barKitPriceEl = cartRows[1].getElementsByClassName('cart-price')[0]

    let barCourseQuantity = parseInt(cartRows[0].getElementsByClassName('cart-quantity-input')[0].value)
    let barKitQuantity = parseInt(cartRows[1].getElementsByClassName('cart-quantity-input')[0].value)

    let barCoursePrice = parseFloat(barCoursePriceEl.innerHTML.replace('$', ''))
    let barKitPrice = parseFloat(barKitPriceEl.innerHTML.replace('$', ''))
    
    let barCourseTotal = barCoursePrice * barCourseQuantity
    let barKitTotal = barKitPrice * barKitQuantity
    let barCombo = barKitTotal + barCourseTotal
    //console.log(price * quanity)
    total = total + (barCombo)
    
    document.getElementsByClassName('cart-total-price')[0].innerHTML = `$${total}`
    let addTax = total * stateTax
    document.getElementsByClassName('cart-total-price')[1].innerHTML = `$${addTax.toFixed(2)}`
    let newTotal = total + addTax
    document.getElementsByClassName('cart-total-price')[2].innerHTML = `$${newTotal.toFixed(2)}`
    document.getElementsByClassName('cart-total-price')[3].innerHTML = `$${newTotal.toFixed(2)}`

}



function updateCartTotal (){
    //[array of items]
    let cartContainer = document.getElementsByClassName('cart-items')[0]
    //will get all the cart rows in the container cartRows.length is 2
    let cartRows = cartContainer.getElementsByClassName('cart-row')
    const stateTax = 0.08

    let total = 0
    //Loop over the rows 
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];//whichever row we are currently on

        //the price and quanity in the first row or the row we're currently on? 
        let priceEl = cartRow.getElementsByClassName('cart-price')[0]
        let quantityEl = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceEl, quantityEl)

        // replace = take off dollar sign & parseFloat = make string a number 
        let price = parseFloat(priceEl.innerHTML.replace('$', ''))
        let quanity = quantityEl.value // value is the number in the input field
        console.log(price * quanity)
        total = total + (price * quanity)
    }
    //total = Math.round(total*100) /100
    document.getElementsByClassName('cart-total-price')[0].innerHTML = `$${total.toFixed(2)}`
    let addTax = total * stateTax
    document.getElementsByClassName('cart-total-price')[1].innerHTML = `$${addTax.toFixed(2)}`
    let newTotal = total + addTax
    document.getElementsByClassName('cart-total-price')[2].innerHTML = `$${newTotal.toFixed(2)}`
    document.getElementsByClassName('cart-total-price')[3].innerHTML = `$${newTotal.toFixed(2)}`
}

// let rmItems = document.querySelectorAll('.btn-danger');
// for (const item of rmItems){
//     item.addEventListener('click', (event) => {
//         let btnClicked = event.target;
//         btnClicked.parentElement.parentElement.parentElement.parentElement.remove()
//         //btnClicked.remove(cartRow)
//         console.log(`clicked`)
//         updateCartTotal()
//     })
// }

// Loop All 
// for (const row of cartRows){
//     let priceEl = row.querySelectorAll('.cart-price')
//     let quantityEl = row.querySelectorAll('.cart-quantity-input')

//     priceEl.forEach(price => {
//         let priceNum = parseInt(price.innerText.replace('$', ''))
//         console.log(priceNum)
        
//         quantityEl.forEach(quantity => {
//             let quantityVal = quantity.value
//             console.log(quantityVal)
//             console.log(quantityVal * priceNum)
//         })
        
//     })
    
// }

//Runs both totals 
// function updateCartTotal (){
//     // let cartContainer = document.querySelector('.cart-items')
//     // let cartRows = cartContainer.querySelectorAll('.cart-row')
//     let totalPrice = 0
//     for (const row of cartRows){
//         let priceEl = row.querySelectorAll('.cart-price')[0]
//         let quantityEl = row.querySelectorAll('.cart-quantity-input')[0]

//         console.log(priceEl, quantityEl)
//         let priceNum = parseFloat(priceEl.innerText.replace('$', ''))
//         console.log(priceNum)
//         let quantity = parseFloat(quantityEl.value)
//         console.log(quantity)
//         console.log(quantity * priceNum)
//         totalPrice = totalPrice + (priceNum * quantity)
//         console.log(totalPrice)

//         let cartTotalEl = document.querySelectorAll('.cart-total-price')
//         //.innerText = `$${total}`
//         cartTotalEl.forEach(total => {
//         let newTotal = total.innerHTML = `$${totalPrice}`
//         return newTotal
//     })
//     }
//     // let cartTotalEl = document.querySelectorAll('.cart-total-price')
//     // //.innerText = `$${total}`
//     // cartTotalEl.forEach(total => {
//     //     let newTotal = total.innerHTML = `$${totalPrice}`
//     //     return newTotal
//     // })
// }
