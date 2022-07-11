const express = require('express')
const app = express()
const port = 3000

//ejs - embed serve-side code into front end HTML
app.set('view engine', 'ejs')
//Link server to public files - BVBSalesPage
app.use(express.static('public'))
//temp-host
app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
})