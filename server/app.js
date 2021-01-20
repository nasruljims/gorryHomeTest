const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT, () => {
    console.log('http://localhost:3000')
})