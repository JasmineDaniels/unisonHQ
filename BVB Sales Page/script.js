console.log(`I am linked`)
//let cartContainer = document.querySelector('.cart-items')
//let cartRows = cartContainer.querySelectorAll('.cart-row')



let rmItems = document.querySelectorAll('.btn-danger');
for (const item of rmItems){
    item.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.parentElement.parentElement.remove()
        //btnClicked.remove(cartRow)
        console.log(`clicked`)
        updateCartTotal()
    })
}

//let cartContainer = document.querySelector('tbody')
//let priceRows = cartContainer.querySelectorAll('.price')
//let quantityElement = cartContainer.querySelectorAll('input')
//let priceEl = parseFloat(price.innerHTML.replace('$', ''))
//let quantityEl = document.querySelectorAll('input').values



function updateCartTotal (){
    //[array of items]
    let cartContainer = document.getElementsByClassName('cart-items')[0]
    //will get all the cart rows in the container cartRows.length is 2
    let cartRows = cartContainer.getElementsByClassName('cart-row')
    //Loop over the rows 
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];//whichever row we are currently on

        let priceEl = cartRow.getElementsByClassName('cart-price')[0]
        let quantityEl = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceEl, quantityEl)

        var price = parseFloat(priceEl.innerHTML.replace('$', ''))
        console.log(price)
        
        
    }
}

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
