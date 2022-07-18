if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
//testing
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express')
const fs = require('fs')
const app = express()
const port = 4000

//ejs - embed serve-side code into front end HTML
app.set('view engine', 'ejs')
//Link server to public files - BVBSalesPage
app.use(express.static('public')) //index.html

// app.get('/store', (req, res) => {
//     res.sendFile(`${__dirname}/public/store.html`)
// })
app.get('/store', (req, res) => {
    fs.readFile('items.json', (err, data) => {
        err ? res.status(500).end() : res.render('store.ejs', {
            items: JSON.parse(data)
        })
    })
})


//temp-host
app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
})