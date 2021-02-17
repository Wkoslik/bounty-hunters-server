//require packages
require('dotenv').config()
const cors = require('cors')
const express = require('express')

//create instance for express app
const app = express()

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())




app.listen(process.env.PORT || 3000, () =>{
    console.log(`🌶 Listening on the sweet sounds of ${process.env.PORT} || ${3000}`)
})