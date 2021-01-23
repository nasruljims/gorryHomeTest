const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log('http://localhost:3000')
})